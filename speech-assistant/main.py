import speech_recognition as sr
import webbrowser
import time
import playsound
import os
import random
from gtts import gTTS

r = sr.Recognizer()
r.energy_threshold = 4000

def record_audio(ask = False):
    with sr.Microphone() as source:
        if ask:
            jarvis_speak(ask)
        audio = r.listen(source)
        voice_data = ''
        try:
            voice_data = r.recognize_google(audio)
        except sr.UnknownValueError:
            jarvis_speak('Sorry, i did not get that')
        except sr.RequestError:
            jarvis_speak('Sorry, my speech service is down')
        return voice_data

def jarvis_speak(audio_string):
    tts = gTTS(text=audio_string, lang='en')
    r = random.randint(1, 10000000)
    audio_file = 'audio-{}.mp3'.format(str(r))
    tts.save(audio_file)
    playsound.playsound(audio_file)
    print(audio_string)
    os.remove(audio_file)

def respond(voice_data):
    if 'what is your name' in voice_data:
        jarvis_speak('My name is Jarvis')
    if 'what time is it' in voice_data:
        jarvis_speak(time.ctime())
    if 'search' in voice_data:
        search = record_audio('What do you want to search for?')
        url = 'https:/google.com/search?q={}'.format(search)
        webbrowser.get().open(url)
        jarvis_speak('Here is what I found for {}'.format(search))
    if 'find location' in voice_data:
        location = record_audio('What is the location?')
        url = 'https:/google.nl/maps/place/{}/&amp;'.format(location)
        webbrowser.get().open(url)
        jarvis_speak('Here is the location of {}'.format(location))
    if 'exit' in voice_data:
        exit()


time.sleep(1)
jarvis_speak('How can i help you?')
while 1:
    voice_data = record_audio()
    respond(voice_data)