import face_recognition

image = face_recognition.load_image_file('./img/groups/team1.jpg')
face_locations = face_recognition.face_locations(image)

# Array of coords of each face

print(face_locations)

# only since Python 3.6
# print(f'There are {len(face_locations)} people in this image')

print('There are %s people in this image' % len(face_locations))