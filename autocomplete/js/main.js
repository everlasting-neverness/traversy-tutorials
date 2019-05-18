const search = document.getElementById('search');
const matchList = document.getElementById('match-list');

const searchStates = async searchText => {
    if (!searchText.length) {
        matchList.innerHTML = '';
        return outputHtml([]);
    }

    const res = await fetch('../data/state_capitals.json');
    const states = await res.json();

    let matches = states.filter(state => {
        const regex = new RegExp(`^${searchText}`, 'gi');
        return state.name.match(regex) || state.abbr.match(regex);
    });

    return outputHtml(matches);
};

const outputHtml = matches => {
    if (matches.length) {
        const html = matches.reduce((output, match) => {
            return (output += `
            <div class="card card-body mb-4">
                <h4>${match.name} (${match.abbr}) <span class="text-primary">${
                match.capital
            }</span></h4>
                <small>Lat: ${match.lat} / Lon: ${match.lon}</small>
            </div>
        `);
        }, '');

        matchList.innerHTML = html;
    }
};

search.addEventListener('input', () => searchStates(search.value));
