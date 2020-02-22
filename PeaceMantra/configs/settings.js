let data = {
    "SoundTypes":[
            {
                "Id":1,
                "Name":"Peace",
                "Audio":"https://www.bensound.com/bensound-music/bensound-creativeminds.mp3",
                "Length":5,
                "Unit":"M"
            }
            ,{
                "Id":2,
                "Name":"Love",
                "Audio":"https://www.bensound.com/bensound-music/bensound-funkyelement.mp3",
                "Length":3,
                "Unit":"M"
            }
            ,{
                "Id":3,
                "Name":"Mantras",
                "Audio":null,
                "Length":3,
                "Unit":"C"
            }
        ],
        "Mantras":[
            {
                "Id":1,
                "Name":"Om Bhur Bhuvah Swaha",
                "Full":"Om Bhur Bhuvah Swaha Om Bhur Bhuvah Swaha Om Bhur Bhuvah Swaha"
            },
            {
                "Id":2,
                "Name":"Om Namah Shivay",
                "Full":"Om Namah Shivay Om Namah Shivay Om Namah Shivay"
            },
            {
                "Id":3,
                "Name":"Om Gangan Patye Namo Namah",
                "Full":"Om Gangan Patye Namo Namah Om Gangan Patye Namo Namah Om Gangan Patye Namo Namah Om Gangan Patye Namo Namah"
            }
        ],
        "Defaults":{
            "SoundType":1,
            "Mantra":1,
            "MantraMute":0
        },
        "Unit":{
            "C":[11,21,54,81,108],
            "M":[5,10,15,20,25,30,40,50,60,75,90,120]
        }
    };
    
export const settings =  data;
export const Minutes = data.Unit.M;
export const Counts = data.Unit.C;
export const Defaults = data.Defaults;