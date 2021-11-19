from glob import glob as g
import pathlib
import sys
import os

screen_name = sys.argv[1];
if "-" in screen_name:
    p1 = screen_name.split('-')[0]
    p2 = screen_name.split('-')[1]
    c1 = p1[0].upper()+p1[1:].lower() + p2[0].upper()+p2[1:].lower()
    c2 = screen_name.lower()
else:
    c1 = screen_name[0].upper()+screen_name.lower()[1:]
    c2 = c1.lower()

base_dir = str( pathlib.Path(__file__).absolute().parent ) +'/'
files = [
        base_dir+"snippet/Story.js",
        base_dir+"snippet/StoryWrapper.js",
        base_dir+"snippet/components/StoryWord.js",
        base_dir+"snippet/context/story-context.js",
        ]
try:
    os.mkdir(screen_name)
except:
    pass
try:
    os.mkdir(screen_name + '/context')
except:
    pass
try:
    os.mkdir(screen_name + '/components')
except:
    pass

for f in files:
    a = open(f).read().replace('Story',c1)
    b = a.replace('story',c2)
    dir_ = f.split('/')[-2]
    if dir_ == 'snippet':
        file_name = f.split('/')[-1].replace('Story',c1)
        file_name = file_name.replace('story',c2)
        open( screen_name + '/'+ file_name  ,'w').write(b)
        continue
    else:
        file_name = f.split('/')[-1].replace('Story',c1)
        file_name = file_name.replace('story',c2)
        open(screen_name + '/' + dir_+ '/' + file_name  ,'w').write(b)

