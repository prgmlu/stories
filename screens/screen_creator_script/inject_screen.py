import sys
#usage <python> inject_screen.py TottaBotta totta-botta
#
#
path = "/home/cfe/Desktop/stories/App.js" 
find = '<Stack.Screen name="HomePage" component={HomePage} options={{headerShown:false}} />'
replace = find.replace('name="HomePage"',"name="+'"'+sys.argv[1]+'"')
replace = replace.replace('component={HomePage}',"component={"+sys.argv[1]+"Wrapper}")

import_addition = "import LearnWrapper from './screens/Learn/LearnWrapper.js';"
import_addition = import_addition.replace("LearnWrapper",sys.argv[1]+"Wrapper")
import_addition = import_addition.replace("screens/Learn","screens/"+sys.argv[2])

import pdb; pdb.set_trace();

x = open(path).read().replace(find,find+"\n"+replace)
open(path,'w').write(import_addition +"\n"+ x)

path = "/home/cfe/Desktop/stories/screens/homepage/HomePage.js"  
find = '<AppButton text="Matching" onPress={()=>navigation.navigate("Matching")} />'
replace = find.replace('Matching',sys.argv[1])
x = open(path).read().replace(find,find+"\n"+replace)


open(path,'w').write(x)
