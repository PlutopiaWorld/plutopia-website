const redditJokes = [
    {
        "q": "",
        "a": "I'm tired of following my dreams. I'm just going to ask them where they are going and meet up with them later."
    },
    {
        "q": "Did you hear about the guy whose whole left side was cut off?",
        "a": "He's all right now."
    },
    {
        "q": "Why didn't the skeleton cross the road?",
        "a": "Because he had no guts."
    },
    {
        "q": "What did one nut say as he chased another nut?",
        "a": "I'm a cashew!"
    },
    {
        "q": "",
        "a": "Chances are if you' ve seen one shopping center, you've seen a mall."
    },
    {
        "q": "",
        "a": "I knew I shouldn't steal a mixer from work, but it was a whisk I was willing to take."
    },
    {
        "q": "How come the stadium got hot after the game?",
        "a": "Because all of the fans left."
    },
    {
        "q": "Why was it called the dark ages?",
        "a": "Because of all the knights."
    },
    {
        "q": "",
        "a": "A steak pun is a rare medium well done."
    },
    {
        "q": "Why did the tomato blush?",
        "a": "Because it saw the salad dressing."
    },
    {
        "q": "Did you hear the joke about the wandering nun?",
        "a": "She was a roman catholic."
    },
    {
        "q": "What creature is smarter than a talking parrot?",
        "a": "A spelling bee."
    },
    {
        "q": "",
        "a": "I'll tell you what often gets over looked... garden fences."
    },
    {
        "q": "Why did the kid cross the playground?",
        "a": "To get to the other slide."
    },
    {
        "q": "Why do birds fly south for the winter?",
        "a": "Because it's too far to walk."
    },
    {
        "q": "What is a centipedes's favorite Beatle song?",
        "a": "I want to hold your hand, hand, hand, hand..."
    },
    {
        "q": "",
        "a": "My first time using an elevator was an uplifting experience. The second time let me down."
    },
    {
        "q": "",
        "a": "To be Frank, I'd have to change my name."
    },
    {
        "q": "",
        "a": "Slept like a log last night \u2026 woke up in the fireplace."
    },
    {
        "q": "Why does a Moon-rock taste better than an Earth-rock?",
        "a": "Because it's a little meteor."
    },
    {
        "q": "",
        "a": "I thought my wife was joking when she said she'd leave me if I didn't stop signing \"I'm A Believer\"... Then I saw her face."
    },
    {
        "q": "",
        "a": "I'm only familiar with 25 letters in the English language. I don't know why."
    },
    {
        "q": "What do you call two barracuda fish?",
        "a": "A Pairacuda!"
    },
    {
        "q": "What did the father tomato say to the baby tomato whilst on a family walk?",
        "a": "Ketchup."
    },
    {
        "q": "Why is Peter Pan always flying?",
        "a": "Because he Neverlands."
    },
    {
        "q": "What do you do on a remote island?",
        "a": "Try and find the TV island it belongs to."
    },
    {
        "q": "Did you know that protons have mass?",
        "a": "I didn't even know they were catholic."
    },
    {
        "q": "",
        "a": "Dad I'm hungry' \u2026 \u2018Hi hungry I'm dad"
    },
    {
        "q": "",
        "a": "I was fired from the keyboard factory yesterday.  I wasn't putting in enough shifts."
    },
    {
        "q": "",
        "a": "Whoever invented the knock-knock joke should get a no bell prize."
    },
    {
        "q": "Wife: Honey I'm pregnant.\r\n\r\nMe: Well\u2026. what do we do now?",
        "a": "Wife: Well, I guess we should go to a baby doctor.\r\n\r\nMe: Hm.. I think I'd be a lot more comfortable going to an adult doctor."
    },
    {
        "q": "When will the little snake arrive?",
        "a": "I don't know but he won't be long..."
    },
    {
        "q": "Why was Pavlov's beard so soft?",
        "a": "Because he conditioned it."
    },
    {
        "q": "Do I enjoy making courthouse puns?",
        "a": "Guilty"
    },
    {
        "q": "Why did the kid throw the clock out the window?",
        "a": "He wanted to see time fly!"
    },
    {
        "q": "Hear about the new restaurant called Karma?",
        "a": "There's no menu: You get what you deserve."
    },
    {
        "q": "Why couldn't the kid see the pirate movie?",
        "a": "Because it was rated arrr!"
    },
    {
        "q": "",
        "a": "Man, I really love my furniture... me and my recliner go way back."
    },
    {
        "q": "What did the traffic light say to the car as it passed?",
        "a": "\"Don't look I'm changing!\""
    },
    {
        "q": "",
        "a": "My son is studying to be a surgeon, I just hope he makes the cut."
    },
    {
        "q": "Why did the man run around his bed?",
        "a": "Because he was trying to catch up on his sleep!"
    },
    {
        "q": "What did one wall say to the other wall?",
        "a": "I'll meet you at the corner!"
    },
    {
        "q": "",
        "a": "Sometimes I tuck my knees into my chest and lean forward.  That's just how I roll."
    },
    {
        "q": "",
        "a": "Conjunctivitis.com \u2013 now that's a site for sore eyes."
    },
    {
        "q": "How many South Americans does it take to change a lightbulb?",
        "a": "A Brazilian"
    },
    {
        "q": "",
        "a": "I don't trust stairs. They're always up to something."
    },
    {
        "q": "Why was the robot angry?",
        "a": "Because someone kept pressing his buttons!"
    },
    {
        "q": "Which is the fastest growing city in the world?",
        "a": "Dublin'"
    },
    {
        "q": "",
        "a": "A police officer caught two kids playing with a firework and a car battery. He charged one and let the other one off."
    },
    {
        "q": "What is the difference between ignorance and apathy?",
        "a": "I don't know and I don't care."
    },
    {
        "q": "",
        "a": "I went to a Foo Fighters Concert once... It was Everlong..."
    },
    {
        "q": "",
        "a": "Some people eat light bulbs. They say it's a nice light snack."
    },
    {
        "q": "",
        "a": "I went to the store to pick up eight cans of sprite... when I got home I realized I'd only picked seven up"
    },
    {
        "q": "",
        "a": "I cut my finger chopping cheese, but I think that I may have grater problems."
    },
    {
        "q": "",
        "a": "Last night me and my girlfriend watched three DVDs back to back. Luckily I was the one facing the TV."
    },
    {
        "q": "",
        "a": "I got a reversible jacket for Christmas, I can't wait to see how it turns out."
    },
    {
        "q": "What did Romans use to cut pizza before the rolling cutter was invented?",
        "a": "Lil Caesars"
    },
    {
        "q": "",
        "a": "My pet mouse 'Elvis' died last night. He was caught in a trap.."
    },
    {
        "q": "",
        "a": "Never take advice from electrons. They are always negative."
    },
    {
        "q": "Why are oranges the smartest fruit?",
        "a": "Because they are made to concentrate."
    },
    {
        "q": "What did the beaver say to the tree?",
        "a": "It's been nice gnawing you."
    },
    {
        "q": "How do you fix a damaged jack-o-lantern?",
        "a": "You use a pumpkin patch."
    },
    {
        "q": "What did the late tomato say to the early tomato?",
        "a": "I'll ketch up"
    },
    {
        "q": "",
        "a": "I have kleptomania, but when it gets bad, I take something for it."
    },
    {
        "q": "",
        "a": "I used to be addicted to soap, but I'm clean now."
    },
    {
        "q": "When is a door not a door?",
        "a": "When it's ajar."
    },
    {
        "q": "",
        "a": "I made a belt out of watches once... It was a waist of time."
    },
    {
        "q": "Why did Mozart kill all his chickens?",
        "a": "Because when he asked them who the best composer was, they'd all say \"Bach bach bach!\""
    },
    {
        "q": "",
        "a": "This furniture store keeps emailing me, all I wanted was one night stand!"
    },
    {
        "q": "How do you find Will Smith in the snow?",
        "a": "Look for fresh prints."
    },
    {
        "q": "",
        "a": "My sister bet me $15 that I couldn't build a car out of spaghetti. You should have seen the look on her face as I drove pasta."
    },
    {
        "q": "",
        "a": "My boss told me to have a good day... so I went home."
    },
    {
        "q": "",
        "a": "I just read a book about Stockholm syndrome. It was pretty bad at first, but by the end I liked it."
    },
    {
        "q": "Why do trees seem suspicious on sunny days?",
        "a": "Dunno, they're just a bit shady."
    },
    {
        "q": "",
        "a": "If at first you don't succeed, sky diving is not for you!"
    },
    {
        "q": "",
        "a": "I'd like to start a diet, but I've got too much on my plate right now."
    },
    {
        "q": "What kind of music do mummy's like?",
        "a": "Rap"
    },
    {
        "q": "What's large, grey, and doesn't matter?",
        "a": "An irrelephant."
    },
    {
        "q": "",
        "a": "A book just fell on my head. I only have my shelf to blame."
    },
    {
        "q": "What did the dog say to the two trees?",
        "a": "Bark bark."
    },
    {
        "q": "",
        "a": "If a child refuses to sleep during nap time, are they guilty of resisting a rest?"
    },
    {
        "q": "Why can't your nose be 12 inches long?",
        "a": "Because then it'd be a foot!"
    },
    {
        "q": "Have you ever heard of a music group called Cellophane?",
        "a": "They mostly wrap."
    },
    {
        "q": "What do you call a boy who stopped digging holes?",
        "a": "Douglas."
    },
    {
        "q": "What did the mountain climber name his son?",
        "a": "Cliff."
    },
    {
        "q": "Why should you never trust a pig with a secret?",
        "a": "Because it's bound to squeal."
    },
    {
        "q": "Why are mummys scared of vacation?",
        "a": "They're afraid to unwind."
    },
    {
        "q": "",
        "a": "Whiteboards ... are remarkable."
    },
    {
        "q": "What kind of dinosaur loves to sleep?",
        "a": "A stega-snore-us."
    },
    {
        "q": "What has three letters and starts with gas?",
        "a": "A Car."
    },
    {
        "q": "What's Forest Gump's Facebook password?",
        "a": "1forest1"
    },
    {
        "q": "What kind of tree fits in your hand?",
        "a": "A palm tree!"
    },
    {
        "q": "",
        "a": "Whenever the cashier at the grocery store asks my dad if he would like the milk in a bag he replies, \u2018No, just leave it in the carton!'"
    },
    {
        "q": "",
        "a": "I used to be addicted to the hokey pokey, but I turned myself around."
    },
    {
        "q": "How many tickles does it take to tickle an octopus?",
        "a": "Ten-tickles!"
    },
    {
        "q": "Me: If humans lose the ability to hear high frequency volumes as they get older, can my 4 week old son hear a dog whistle?",
        "a": "Doctor: No, humans can never hear that high of a frequency no matter what age they are.\r\n\r\nMe: Trick question... dogs can't whistle."
    },
    {
        "q": "What musical instrument is found in the bathroom?",
        "a": "A tuba toothpaste."
    },
    {
        "q": "",
        "a": "My boss told me to attach two pieces of wood together... I totally nailed it!"
    },
    {
        "q": "What was the pumpkin's favorite sport?",
        "a": "Squash."
    },
    {
        "q": "",
        "a": "Recent survey revealed 6 out of 7 dwarf's aren't happy."
    },
    {
        "q": "What do you call corn that joins the army?",
        "a": "Kernel."
    },
    {
        "q": "",
        "a": "I've been trying to come up with a dad joke about momentum . . . but I just can't seem to get it going."
    },
    {
        "q": "",
        "a": "\u2018Put the cat out' \u2026 \u2018I didn't realize it was on fire"
    },
    {
        "q": "Why don't skeletons ride roller coasters?",
        "a": "They don't have the stomach for it."
    },
    {
        "q": "Is there a hole in your shoe?",
        "a": "No\u2026 Then how'd you get your foot in it?"
    },
    {
        "q": "",
        "a": "Every night at 11:11, I make a wish that someone will come fix my broken clock."
    },
    {
        "q": "",
        "a": "Two muffins were sitting in an oven, and the first looks over to the second, and says, \"man, it's really hot in here\". The second looks over at the first with a surprised look, and answers, \"WHOA, a talking muffin!\""
    },
    {
        "q": "What's the difference between a guitar and a fish?",
        "a": "You can tune a guitar but you can't \"tuna\" fish!"
    },
    {
        "q": "Did you hear that the police have a warrant out on a midget psychic ripping people off?",
        "a": "It reads \"Small medium at large.\""
    },
    {
        "q": "Why don't sharks eat clowns?",
        "a": "Because they taste funny."
    },
    {
        "q": "",
        "a": "Just read a few facts about frogs. They were ribbiting."
    },
    {
        "q": "",
        "a": "Two satellites decided to get married. The wedding wasn't much, but the reception was incredible."
    },
    {
        "q": "What do you call a fish with no eyes?",
        "a": "A fsh."
    },
    {
        "q": "What do you get if you put a duck in a cement mixer?",
        "a": "Quacks in the pavement."
    },
    {
        "q": "",
        "a": "They tried to make a diamond shaped like a duck. It quacked under the pressure."
    },
    {
        "q": "Where's the bin?",
        "a": "Dad: I haven't been anywhere!"
    },
    {
        "q": "",
        "a": "How do you make a water bed more bouncy. You use Spring Water"
    },
    {
        "q": "",
        "a": "I considered building the patio by myself. But I didn't have the stones."
    },
    {
        "q": "",
        "a": "In my career as a lumberjack I cut down exactly 52,487 trees. I know because I kept a log."
    },
    {
        "q": "Why do bears have hairy coats?",
        "a": "Fur protection."
    },
    {
        "q": "What do you get when you cross a bee and a sheep?",
        "a": "A bah-humbug."
    },
    {
        "q": "What did one snowman say to the other snow man?",
        "a": "Do you smell carrot?"
    },
    {
        "q": "Why do bees hum?",
        "a": "Because they don't know the words."
    },
    {
        "q": "What do you call a troublesome Canadian high schooler?",
        "a": "A poutine."
    },
    {
        "q": "",
        "a": "A magician was driving down the street and then he turned into a driveway."
    },
    {
        "q": "",
        "a": "Don't trust atoms. They make up everything."
    },
    {
        "q": "",
        "a": "If you walk into a forest and cut down a tree, but the tree doesn't understand why you cut it down, do you think it's stumped?"
    },
    {
        "q": "Where do bees go to the bathroom?",
        "a": "The BP station."
    },
    {
        "q": "What is the best way to carve?",
        "a": "Whittle by whittle."
    },
    {
        "q": "Why did the tree go to the dentist?",
        "a": "It needed a root canal."
    },
    {
        "q": "",
        "a": "It was raining cats and dogs the other day. I almost stepped in a poodle."
    },
    {
        "q": "Why do bananas have to put on sunscreen before they go to the beach?",
        "a": "Because they might peel!"
    },
    {
        "q": "What do you call a bee that lives in America?",
        "a": "A USB."
    },
    {
        "q": "",
        "a": "I was wondering why the frisbee was getting bigger, then it hit me."
    },
    {
        "q": "",
        "a": "A farmer had 297 cows, when he rounded them up, he found he had 300"
    },
    {
        "q": "What's the difference between a hippo and a zippo?",
        "a": "One is really heavy, the other is a little lighter."
    },
    {
        "q": "",
        "a": "Somebody stole my Microsoft Office and they're going to pay - you have my Word."
    },
    {
        "q": "What concert costs only 45 cents?",
        "a": "50 cent featuring Nickelback."
    },
    {
        "q": "",
        "a": "I couldn't figure out how the seat belt worked. Then it just clicked."
    },
    {
        "q": "What did the green grape say to the purple grape?",
        "a": "BREATH!!"
    },
    {
        "q": "What do you call a dad that has fallen through the ice?",
        "a": "A Popsicle."
    },
    {
        "q": "Two parrots are sitting on a perch. One turns to the other and asks, \"do you smell fish?",
        "a": "\""
    },
    {
        "q": "Bad at golf?",
        "a": "Join the club."
    },
    {
        "q": "",
        "a": "I had a pair of racing snails. I removed their shells to make them more aerodynamic, but they became sluggish."
    },
    {
        "q": "What do you call a pile of cats?",
        "a": "A Meowtain."
    },
    {
        "q": "How do hens stay fit?",
        "a": "They always egg-cercise!"
    },
    {
        "q": "Can a kangaroo jump higher than the Empire State Building?",
        "a": "Of course. The Empire State Building can't jump."
    },
    {
        "q": "What do you give a sick lemon?",
        "a": "Lemonaid."
    },
    {
        "q": "What do you call an old snowman?",
        "a": "Water."
    },
    {
        "q": "",
        "a": "I just got fired from a florist, apparently I took too many leaves."
    },
    {
        "q": "Why don't skeletons ever go trick or treating?",
        "a": "Because they have nobody to go with."
    },
    {
        "q": "What does a female snake use for support?",
        "a": "A co-Bra!"
    },
    {
        "q": "",
        "a": "\"Dad, I'm cold.\"\r\n\"Go stand in the corner, I hear it's 90 degrees.\""
    },
    {
        "q": "",
        "a": "Child: Dad, make me a sandwich. Dad: Poof! You're a sandwich."
    },
    {
        "q": "Why are graveyards so noisy?",
        "a": "Because of all the coffin."
    },
    {
        "q": "What kind of bagel can fly?",
        "a": "A plain bagel."
    },
    {
        "q": "How many apples grow on a tree?",
        "a": "All of them!"
    },
    {
        "q": "What do you call a careful wolf?",
        "a": "Aware wolf."
    },
    {
        "q": "",
        "a": "I was just looking at my ceiling. Not sure if it's the best ceiling in the world, but it's definitely up there."
    },
    {
        "q": "Why do valley girls hang out in odd numbered groups?",
        "a": "Because they can't even."
    },
    {
        "q": "\"My Dog has no nose.\" \"How does he smell?",
        "a": "\" \"Awful\""
    },
    {
        "q": "What do you call a cow with no legs?",
        "a": "Ground beef."
    },
    {
        "q": "Why did the half blind man fall in the well?",
        "a": "Because he couldn't see that well!"
    },
    {
        "q": "",
        "a": "As I suspected, someone has been adding soil to my garden. The plot thickens."
    },
    {
        "q": "What do bees do after they are married?",
        "a": "They go on a honeymoon."
    },
    {
        "q": "",
        "a": "It's hard to explain puns to kleptomaniacs, because they take everything literally."
    },
    {
        "q": "",
        "a": "It's difficult to say what my wife does, she sells sea shells by the sea shore."
    },
    {
        "q": "Why did Dracula lie in the wrong coffin?",
        "a": "He made a grave mistake."
    },
    {
        "q": "What did one plate say to the other plate?",
        "a": "Dinner is on me!"
    },
    {
        "q": "what do you call a dog that can do magic tricks?",
        "a": "a labracadabrador"
    },
    {
        "q": "Doctor: Do you want to hear the good news or the bad news?",
        "a": "Patient: Good news please.\r\nDoctor: we're naming a disease after you."
    },
    {
        "q": "",
        "a": "Atheism is a non-prophet organisation."
    },
    {
        "q": "",
        "a": "I tried to write a chemistry joke, but could never get a reaction."
    },
    {
        "q": "",
        "a": "I gave my friend 10 puns hoping that one of them would make him laugh. Sadly, no pun in ten did."
    },
    {
        "q": "What do computers and air conditioners have in common?",
        "a": "They both become useless when you open windows."
    },
    {
        "q": "What do you call a monkey in a mine field?",
        "a": "A babooooom!"
    },
    {
        "q": "",
        "a": "I cut my finger cutting cheese. I know it may be a cheesy story but I feel grate now."
    },
    {
        "q": "How do you steal a coat?",
        "a": "You jacket."
    },
    {
        "q": "Why don't you find hippopotamuses hiding in trees?",
        "a": "They're really good at it."
    },
    {
        "q": "",
        "a": "I'm reading a book on the history of glue \u2013 can't put it down."
    },
    {
        "q": "Want to hear a joke about construction?",
        "a": "Nah, I'm still working on it."
    },
    {
        "q": "",
        "a": "My friend told me that pepper is the best seasoning for a roast, but I took it with a grain of salt."
    },
    {
        "q": "",
        "a": "Just watched a documentary about beavers\u2026 It was the best damn program I've ever seen."
    },
    {
        "q": "Why do choirs keep buckets handy?",
        "a": "So they can carry their tune"
    },
    {
        "q": "Did you hear about the kidnapping at school?",
        "a": "It's ok, he woke up."
    },
    {
        "q": "",
        "a": "You will never guess what Elsa did to the balloon. She let it go."
    },
    {
        "q": "Did you hear about the two thieves who stole a calendar?",
        "a": "They each got six months."
    },
    {
        "q": "Why can't eggs have love?",
        "a": "They will break up too soon."
    },
    {
        "q": "",
        "a": "You can't run through a camp site. You can only ran, because it's past tents."
    },
    {
        "q": "",
        "a": "They're making a movie about clocks. It's about time"
    },
    {
        "q": "",
        "a": "I've just been reading a book about anti-gravity, it's impossible to put down!"
    },
    {
        "q": "",
        "a": "Archaeology really is a career in ruins."
    },
    {
        "q": "",
        "a": "I was going to get a brain transplant, but I changed my mind"
    },
    {
        "q": "Why can't you use \"Beef stew\" as a password?",
        "a": "Because it's not stroganoff."
    },
    {
        "q": "What did the piece of bread say to the knife?",
        "a": "Butter me up."
    },
    {
        "q": "Why couldn't the lifeguard save the hippie?",
        "a": "He was too far out, man."
    },
    {
        "q": "",
        "a": "Some people say that I never got over my obsession with Phil Collins.\r\nBut take a look at me now."
    },
    {
        "q": "Why did the girl smear peanut butter on the road?",
        "a": "To go with the traffic jam."
    },
    {
        "q": "",
        "a": "It takes guts to be an organ donor."
    },
    {
        "q": "",
        "a": "The rotation of earth really makes my day."
    },
    {
        "q": "How much does a hipster weigh?",
        "a": "An instagram."
    },
    {
        "q": "A woman is on trial for beating her husband to death with his guitar collection. Judge says, \u2018First offender?",
        "a": "' She says, \u2018No, first a Gibson! Then a Fender!'"
    },
    {
        "q": "",
        "a": "I saw an ad in a shop window, \"Television for sale, $1, volume stuck on full\", I thought, \"I can't turn that down\"."
    },
    {
        "q": "What kind of dog lives in a particle accelerator?",
        "a": "A Fermilabrador Retriever."
    },
    {
        "q": "What's blue and not very heavy?",
        "a": "Light blue."
    },
    {
        "q": "",
        "a": "Guy told me today he did not know what cloning is. I told him, \"that makes 2 of us.\""
    },
    {
        "q": "",
        "a": "I was so proud when I finished the puzzle in six months, when on the side it said three to four years."
    },
    {
        "q": "Where did you learn to make ice cream?",
        "a": "Sunday school."
    },
    {
        "q": "",
        "a": "Coffee has a tough time at my house, every morning it gets mugged."
    },
    {
        "q": "",
        "a": "A quick shoutout to all of the sidewalks out there... Thanks for keeping me off the streets."
    },
    {
        "q": "Where does Napoleon keep his armies?",
        "a": "In his sleevies."
    },
    {
        "q": "",
        "a": "Leather is great for sneaking around because it's made of hide."
    },
    {
        "q": "",
        "a": "People are making apocalypse jokes like there's no tomorrow."
    },
    {
        "q": "What is the tallest building in the world?",
        "a": "The library \u2013 it's got the most stories!"
    },
    {
        "q": "What kind of magic do cows believe in?",
        "a": "MOODOO."
    },
    {
        "q": "What's the longest word in the dictionary?",
        "a": "Smiles. Because there's a mile between the two S's."
    },
    {
        "q": "",
        "a": "I just broke my guitar. It's okay, I won't fret"
    },
    {
        "q": "",
        "a": "It's only a murder of crows if there's probable caws."
    },
    {
        "q": "How many kids with ADD does it take to change a lightbulb?",
        "a": "Let's go ride bikes!"
    },
    {
        "q": "Where do hamburgers go to dance?",
        "a": "The meat-ball."
    },
    {
        "q": "",
        "a": "I invented a new word! Plagiarism!"
    },
    {
        "q": "",
        "a": "Did you know that ghosts call their true love their ghoul-friend?"
    },
    {
        "q": "What do you call a cow with two legs?",
        "a": "Lean beef."
    },
    {
        "q": "What did the big flower say to the littler flower?",
        "a": "Hi, bud!"
    },
    {
        "q": "",
        "a": "I never wanted to believe that my Dad was stealing from his job as a road worker. But when I got home, all the signs were there."
    },
    {
        "q": "Why do pumpkins sit on people's porches?",
        "a": "They have no hands to knock on the door."
    },
    {
        "q": "Who is the coolest Doctor in the hospital?",
        "a": "The hip Doctor!"
    },
    {
        "q": "Why was ten scared of seven?",
        "a": "Because seven ate nine."
    },
    {
        "q": "What do you get when you cross a rabbit with a water hose?",
        "a": "Hare spray."
    },
    {
        "q": "",
        "a": "I applied to be a doorman but didn't get the job due to lack of experience. That surprised me, I thought it was an entry level position."
    },
    {
        "q": "",
        "a": "I knew a guy who collected candy canes, they were all in mint condition"
    },
    {
        "q": "Why does a chicken coop only have two doors?",
        "a": "Because if it had four doors it would be a chicken sedan."
    },
    {
        "q": "",
        "a": "\"I'll call you later.\" Don't call me later, call me Dad."
    },
    {
        "q": "Why did the teddy bear say \"no\" to dessert?",
        "a": "Because she was stuffed."
    },
    {
        "q": "Did you hear the one about the giant pickle?",
        "a": "He was kind of a big dill."
    },
    {
        "q": "",
        "a": "Breaking news! Energizer Bunny arrested \u2013 charged with battery."
    },
    {
        "q": "How many bones are in the human hand?",
        "a": "A handful of them."
    },
    {
        "q": "",
        "a": "A red and a blue ship have just collided in the Caribbean. Apparently the survivors are marooned."
    },
    {
        "q": "",
        "a": "I've just written a song about a tortilla. Well, it is more of a rap really."
    },
    {
        "q": "Can February march?",
        "a": "No, but April may."
    },
    {
        "q": "",
        "a": "So a duck walks into a pharmacy and says \"Give me some chap-stick\u2026 and put it on my bill\""
    },
    {
        "q": "",
        "a": "Egyptians claimed to invent the guitar, but they were such lyres.\ufeff"
    },
    {
        "q": "",
        "a": "Toasters were the first form of pop-up notifications."
    },
    {
        "q": "What is a witch's favorite subject in school?",
        "a": "Spelling!"
    },
    {
        "q": "What do you call a crowd of chess players bragging about their wins in a hotel lobby?",
        "a": "Chess nuts boasting in an open foyer."
    },
    {
        "q": "Which side of the chicken has more feathers?",
        "a": "The outside."
    },
    {
        "q": "",
        "a": "Remember, the best angle to approach a problem from is the \"try\" angle."
    },
    {
        "q": "Why are fish easy to weigh?",
        "a": "Because they have their own scales."
    },
    {
        "q": "What did the scarf say to the hat?",
        "a": "You go on ahead, I am going to hang around a bit longer."
    },
    {
        "q": "Did you hear about the scientist who was lab partners with a pot of boiling water?",
        "a": "He had a very esteemed colleague."
    },
    {
        "q": "",
        "a": "This morning I was wondering where the sun was, but then it dawned on me."
    },
    {
        "q": "",
        "a": "Writing with a broken pencil is pointless."
    },
    {
        "q": "Why is it so windy inside an arena?",
        "a": "All those fans."
    },
    {
        "q": "A panda walks into a bar and says to the bartender \"I'll have a Scotch and . . . . . . . . . . . . . . Coke thank you\". \r\n\r\n\"Sure thing\" the bartender replies and asks \"but what's with the big pause?",
        "a": "\" \r\n\r\nThe panda holds up his hands and says \"I was born with them\""
    },
    {
        "q": "",
        "a": "\"Doctor, I've broken my arm in several places\" Doctor \"Well don't go to those places.\""
    },
    {
        "q": "Where was the Declaration of Independence signed?",
        "a": "At the bottom!"
    },
    {
        "q": "What's the difference between an African elephant and an Indian elephant?",
        "a": "About 5000 miles."
    },
    {
        "q": "",
        "a": "Two peanuts were walking down the street. One was a salted"
    },
    {
        "q": "",
        "a": "Don't interrupt someone working intently on a puzzle. Chances are, you'll hear some crosswords."
    },
    {
        "q": "",
        "a": "Today a man knocked on my door and asked for a small donation towards the local swimming pool. I gave him a glass of water."
    },
    {
        "q": "What did the Zen Buddist say to the hotdog vendor?",
        "a": "Make me one with everything."
    },
    {
        "q": "What did the digital clock say to the grandfather clock?",
        "a": "Look, no hands!"
    },
    {
        "q": "A weasel walks into a bar. The bartender says, \"Wow, I've never served a weasel before. What can I get for you?",
        "a": "\"\r\n\"Pop,\" goes the weasel."
    },
    {
        "q": "How was the snow globe feeling after the storm?",
        "a": "A little shaken."
    },
    {
        "q": "Did you hear the one about the guy with the broken hearing aid?",
        "a": "Neither did he."
    },
    {
        "q": "Did you hear about the campsite that got visited by Bigfoot?",
        "a": "It got in tents."
    },
    {
        "q": "",
        "a": "I saw a documentary on TV last night about how they put ships together.  It was rivetting."
    },
    {
        "q": "What did the Red light say to the Green light?",
        "a": "Don't look at me I'm changing!"
    },
    {
        "q": "What did the ocean say to the beach?",
        "a": "Thanks for all the sediment."
    },
    {
        "q": "What did the left eye say to the right eye?",
        "a": "Between us, something smells!"
    },
    {
        "q": "What do you call a fly without wings?",
        "a": "A walk."
    },
    {
        "q": "Why did the melons plan a big wedding?",
        "a": "Because they cantaloupe!"
    },
    {
        "q": "",
        "a": "Yesterday I confused the words \"jacuzzi\" and \"yakuza\". Now I'm in hot water with the Japanese mafia."
    },
    {
        "q": "What is the least spoken language in the world?",
        "a": "Sign Language"
    },
    {
        "q": "What do birds give out on Halloween?",
        "a": "Tweets."
    },
    {
        "q": "",
        "a": "I used to think I was indecisive, but now I'm not sure."
    },
    {
        "q": "",
        "a": "Velcro\u2026 What a rip-off."
    },
    {
        "q": "Have you heard the rumor going around about butter?",
        "a": "Never mind, I shouldn't spread it."
    },
    {
        "q": "What happens to a frog's car when it breaks down?",
        "a": "It gets toad."
    },
    {
        "q": "",
        "a": "I fear for the calendar, its days are numbered."
    },
    {
        "q": "",
        "a": "I'm glad I know sign language, it's pretty handy."
    },
    {
        "q": "",
        "a": "The other day, my wife asked me to pass her lipstick but I accidentally passed her a glue stick. She still isn't talking to me."
    },
    {
        "q": "What do you get when you cross a chicken with a skunk?",
        "a": "A fowl smell!"
    },
    {
        "q": "How many hipsters does it take to change a lightbulb?",
        "a": "Oh, it's a really obscure number. You've probably never heard of it."
    },
    {
        "q": "Where do sheep go to get their hair cut?",
        "a": "The baa-baa shop."
    },
    {
        "q": "",
        "a": "Our wedding was so beautiful, even the cake was in tiers."
    },
    {
        "q": "Why did the miner get fired from his job?",
        "a": "He took it for granite..."
    },
    {
        "q": "What did the hat say to the scarf?",
        "a": "You can hang around. I'll just go on ahead."
    },
    {
        "q": "Where do cats write notes?",
        "a": "Scratch Paper!"
    },
    {
        "q": "Why is the new Kindle screen textured to look like paper?",
        "a": "So you feel write at home."
    },
    {
        "q": "",
        "a": "When my wife told me to stop impersonating a flamingo, I had to put my foot down."
    },
    {
        "q": "What's the advantage of living in Switzerland?",
        "a": "Well, the flag is a big plus."
    },
    {
        "q": "Why did the cookie cry?",
        "a": "It was feeling crumby."
    },
    {
        "q": "",
        "a": "Me and my mates are in a band called Duvet. We're a cover band."
    },
    {
        "q": "Where do you learn to make banana splits?",
        "a": "At sundae school."
    },
    {
        "q": "",
        "a": "Nurse: Doctor, there's a patient that says he's invisible. Doctor: Well, tell him I can't see him right now!"
    },
    {
        "q": "What was a more important invention than the first telephone?",
        "a": "The second one."
    },
    {
        "q": "What do you get when you cross a snowman with a vampire?",
        "a": "Frostbite."
    },
    {
        "q": "What do you do when your bunny gets wet?",
        "a": "You get your hare dryer."
    },
    {
        "q": "Did you know crocodiles could grow up to 15 feet?",
        "a": "But most just have 4."
    },
    {
        "q": "Why did the fireman wear red, white, and blue suspenders?",
        "a": "To hold his pants up."
    },
    {
        "q": "",
        "a": "In the news a courtroom artist was arrested today, I'm not surprised, he always seemed sketchy."
    },
    {
        "q": "What do you call someone with no nose?",
        "a": "Nobody knows."
    },
    {
        "q": "What do you call a girl between two posts?",
        "a": "Annette."
    },
    {
        "q": "What do you call a fat psychic?",
        "a": "A four-chin teller."
    },
    {
        "q": "",
        "a": "I used to be a banker, but I lost interest."
    },
    {
        "q": "Why can't a bicycle stand on its own?",
        "a": "It's two-tired."
    },
    {
        "q": "What does a pirate pay for his corn?",
        "a": "A buccaneer!"
    },
    {
        "q": "",
        "a": "Astronomers got tired watching the moon go around the earth for 24 hours. They decided to call it a day."
    },
    {
        "q": "",
        "a": "My dog used to chase people on a bike a lot. It got so bad I had to take his bike away."
    },
    {
        "q": "",
        "a": "I ate a clock yesterday. It was so time consuming."
    },
    {
        "q": "",
        "a": "Two dyslexics walk into a bra."
    },
    {
        "q": "",
        "a": "I been watching a channel on TV that is strictly just about origami \u2014 of course it is paper-view."
    },
    {
        "q": "",
        "a": "Milk is also the fastest liquid on earth \u2013 its pasteurized before you even see it"
    },
    {
        "q": "Is the pool safe for diving?",
        "a": "It deep ends."
    },
    {
        "q": "Why do scuba divers fall backwards into the water?",
        "a": "Because if they fell forwards they'd still be in the boat."
    },
    {
        "q": "",
        "a": "My wife told me to rub the herbs on the meat for better flavor. That's sage advice."
    },
    {
        "q": "",
        "a": "A man was caught stealing in a supermarket today while balanced on the shoulders of a couple of vampires. He was charged with shoplifting on two counts."
    },
    {
        "q": "",
        "a": "Ben & Jerry's really need to improve their operation. The only way to get there is down a rocky road."
    },
    {
        "q": "How are false teeth like stars?",
        "a": "They come out at night!"
    },
    {
        "q": "What time did the man go to the dentist?",
        "a": "Tooth hurt-y."
    },
    {
        "q": "Did you hear about the cheese factory that exploded in France?",
        "a": "There was nothing left but de Brie."
    },
    {
        "q": "How does a penguin build it's house?",
        "a": "Igloos it together."
    },
    {
        "q": "What is this movie about?",
        "a": "It is about 2 hours long."
    },
    {
        "q": "Why are pirates called pirates?",
        "a": "Because they arrr!"
    },
    {
        "q": "Where does Fonzie like to go for lunch?",
        "a": "Chick-Fil-Eyyyyyyyy."
    },
    {
        "q": "How does a dyslexic poet write?",
        "a": "Inverse."
    },
    {
        "q": "",
        "a": "Don't tell secrets in corn fields. Too many ears around."
    },
    {
        "q": "What did the pirate say on his 80th birthday?",
        "a": "Aye Matey!"
    },
    {
        "q": "Why did the A go to the bathroom and come out as an E?",
        "a": "Because he had a vowel movement."
    },
    {
        "q": "",
        "a": "Yesterday a clown held a door open for me. I thought it was a nice jester."
    },
    {
        "q": "Why did the opera singer go sailing?",
        "a": "They wanted to hit the high Cs."
    },
    {
        "q": "",
        "a": "Never Trust Someone With Graph Paper...\r\n\r\nThey're always plotting something."
    },
    {
        "q": "What do you call an elephant that doesn't matter?",
        "a": "An irrelephant."
    },
    {
        "q": "What do you call a group of disorganized cats?",
        "a": "A cat-tastrophe."
    },
    {
        "q": "What is bread's favorite number?",
        "a": "Leaven."
    },
    {
        "q": "Why can't you hear a pterodactyl go to the bathroom?",
        "a": "The p is silent."
    },
    {
        "q": "How do you know if there's an elephant under your bed?",
        "a": "Your head hits the ceiling!"
    },
    {
        "q": "Why does Norway have barcodes on their battleships?",
        "a": "So when they get back to port, they can Scandinavian."
    },
    {
        "q": "What's the worst part about being a cross-eyed teacher?",
        "a": "They can't control their pupils."
    },
    {
        "q": "What do you call a fashionable lawn statue with an excellent sense of rhythmn?",
        "a": "A metro-gnome"
    },
    {
        "q": "",
        "a": "Someone broke into my house last night and stole my limbo trophy. How low can you go?"
    },
    {
        "q": "Why did the coffee file a police report?",
        "a": "It got mugged."
    },
    {
        "q": "",
        "a": "Mountains aren't just funny, they are hill areas"
    },
    {
        "q": "",
        "a": "I was going to learn how to juggle, but I didn't have the balls."
    },
    {
        "q": "",
        "a": "The Swiss must've been pretty confident in their chances of victory if they included a corkscrew in their army knife."
    },
    {
        "q": "",
        "a": "I wear a stethoscope so that in a medical emergency I can teach people a valuable lesson about assumptions."
    },
    {
        "q": "Why are ghosts bad liars?",
        "a": "Because you can see right through them!"
    },
    {
        "q": "",
        "a": "Every machine in the coin factory broke down all of a sudden without explanation. It just doesn't make any cents."
    },
    {
        "q": "Why does it take longer to get from 1st to 2nd base, than it does to get from 2nd to 3rd base?",
        "a": "Because there's a Shortstop in between!"
    },
    {
        "q": "What do you do when you see a space man?",
        "a": "Park your car, man."
    },
    {
        "q": "",
        "a": "If you want a job in the moisturizer industry, the best advice I can give is to apply daily."
    },
    {
        "q": "Where do you take someone who has been injured in a Peek-a-boo accident?",
        "a": "To the I.C.U."
    },
    {
        "q": "",
        "a": "When you have a bladder infection, urine trouble."
    },
    {
        "q": "How do you make Lady Gaga cry?",
        "a": "Poker face."
    },
    {
        "q": "What do you call a group of killer whales playing instruments?",
        "a": "An Orca-stra."
    },
    {
        "q": "",
        "a": "I was in an 80's band called the prevention. We were better than the cure."
    },
    {
        "q": "What did Michael Jackson name his denim store?",
        "a": "Billy Jeans!"
    },
    {
        "q": "",
        "a": "People saying 'boo! to their friends has risen by 85% in the last year.... That's a frightening statistic."
    },
    {
        "q": "",
        "a": "Geology rocks, but Geography is where it's at!"
    },
    {
        "q": "",
        "a": "I was at the library and asked if they have any books on \"paranoia\", the librarian replied, \"yes, they are right behind you\""
    },
    {
        "q": "Have you heard of the band 1023MB?",
        "a": "They haven't got a gig yet."
    },
    {
        "q": "What happens when you anger a brain surgeon?",
        "a": "They will give you a piece of your mind."
    },
    {
        "q": "",
        "a": "I needed a password eight characters long so I picked Snow White and the Seven Dwarfs."
    },
    {
        "q": "",
        "a": "I used to work at a stationery store.  But, I didn't feel like I was going anywhere.\r\n\r\nSo, I got a job at a travel agency.  Now, I know I'll be going places."
    },
    {
        "q": "",
        "a": "I used to work in a shoe recycling shop. It was sole destroying."
    },
    {
        "q": "",
        "a": "I used to hate facial hair, but then it grew on me."
    },
    {
        "q": "",
        "a": "R.I.P. boiled water. You will be mist."
    },
    {
        "q": "Q: What did the spaghetti say to the other spaghetti?",
        "a": "A: Pasta la vista, baby!"
    },
    {
        "q": "",
        "a": "The first time I got a universal remote control I thought to myself, \"This changes everything\""
    },
    {
        "q": "Why is the ocean always blue?",
        "a": "Because the shore never waves back."
    },
    {
        "q": "Why did the feline fail the lie detector test?",
        "a": "Because he be lion."
    },
    {
        "q": "Why did the man put his money in the freezer?",
        "a": "He wanted cold hard cash!"
    },
    {
        "q": "",
        "a": "I decided to sell my Hoover\u2026 well it was just collecting dust."
    },
    {
        "q": "Why do ducks make great detectives?",
        "a": "They always quack the case."
    },
    {
        "q": "What does a clock do when it's hungry?",
        "a": "It goes back four seconds!"
    },
    {
        "q": "What do I look like?",
        "a": "A JOKE MACHINE!?"
    },
    {
        "q": "",
        "a": "I bought shoes from a drug dealer once. I don't know what he laced them with, but I was tripping all day."
    },
    {
        "q": "What is a tornado's favorite game to play?",
        "a": "Twister!"
    },
    {
        "q": "You know that cemetery up the road?",
        "a": "People are dying to get in there."
    },
    {
        "q": "Did you hear about the Mexican train killer?",
        "a": "He had loco motives"
    },
    {
        "q": "Can I watch the TV?",
        "a": "Dad: Yes, but don't turn it on."
    },
    {
        "q": "What is worse then finding a worm in your Apple?",
        "a": "Finding half a worm in your Apple."
    },
    {
        "q": "What do vegetarian zombies eat?",
        "a": "Grrrrrainnnnnssss."
    },
    {
        "q": "",
        "a": "\"I'm sorry.\" \"Hi sorry, I'm dad\""
    },
    {
        "q": "What is the hardest part about sky diving?",
        "a": "The ground."
    },
    {
        "q": "Why did the cowboy have a weiner dog?",
        "a": "Somebody told him to get a long little doggy."
    },
    {
        "q": "Who did the wizard marry?",
        "a": "His ghoul-friend"
    },
    {
        "q": "How many seconds are in a year?",
        "a": "12.\r\nJanuary 2nd, February 2nd, March 2nd, April 2nd.... etc"
    },
    {
        "q": "",
        "a": "I ordered a chicken and an egg from Amazon. I'll let you know."
    },
    {
        "q": "Ever wondered why bees hum?",
        "a": "It's because they don't know the words."
    },
    {
        "q": "How many optometrists does it take to change a light bulb?",
        "a": "1 or 2? 1... or 2?"
    },
    {
        "q": "",
        "a": "There's not really any training for garbagemen. They just pick things up as they go."
    },
    {
        "q": "Did you hear about the cow who jumped over the barbed wire fence?",
        "a": "It was udder destruction."
    },
    {
        "q": "What do you call a bear with no teeth?",
        "a": "A gummy bear!"
    },
    {
        "q": "",
        "a": "I've deleted the phone numbers of all the Germans I know from my mobile phone. Now it's Hans free."
    },
    {
        "q": "What do you call your friend who stands in a hole?",
        "a": "Phil."
    },
    {
        "q": "",
        "a": "A doll was recently found dead in a rice paddy. It's the only known instance of a nick nack paddy wack."
    },
    {
        "q": "How do you tell the difference between a crocodile and an alligator?",
        "a": "You will see one later and one in a while."
    },
    {
        "q": "What do you call a fake noodle?",
        "a": "An impasta."
    },
    {
        "q": "",
        "a": "The word queue is ironic. It's just q with a bunch of silent letters waiting in line."
    },
    {
        "q": "What do you call a droid that takes the long way around?",
        "a": "R2 detour."
    },
    {
        "q": "What's the best thing about elevator jokes?",
        "a": "They work on so many levels."
    },
    {
        "q": "Where do rabbits go after they get married?",
        "a": "On a bunny-moon."
    },
    {
        "q": "Why do cows wear bells?",
        "a": "Because their horns don't work."
    },
    {
        "q": "Two fish are in a tank, one turns to the other and says, \"how do you drive this thing?",
        "a": "\""
    },
    {
        "q": "",
        "a": "I finally bought the limited edition Thesaurus that I've always wanted. When I opened it, all the pages were blank.\r\nI have no words to describe how angry I am."
    },
    {
        "q": "",
        "a": "This is my step ladder. I never knew my real ladder."
    },
    {
        "q": "",
        "a": "I was thinking about moving to Moscow but there is no point Russian into things."
    },
    {
        "q": "",
        "a": "A man walks into a bar and orders helicopter flavor chips. The barman replies \"sorry mate we only do plain\""
    },
    {
        "q": "",
        "a": "I got an A on my origami assignment when I turned my paper into my teacher"
    },
    {
        "q": "What did the fish say when it swam into a wall?",
        "a": "Damn!"
    },
    {
        "q": "Why does Waldo only wear stripes?",
        "a": "Because he doesn't want to be spotted."
    },
    {
        "q": "",
        "a": "My New Years resolution is to stop leaving things so late."
    },
    {
        "q": "Why did the scarecrow win an award?",
        "a": "Because he was outstanding in his field."
    },
    {
        "q": "",
        "a": "Americans can't switch from pounds to kilograms overnight. That would cause mass confusion."
    },
    {
        "q": "",
        "a": "An apple a day keeps the bullies away. If you throw it hard enough."
    },
    {
        "q": "Why does Superman get invited to dinners?",
        "a": "Because he is a Supperhero."
    },
    {
        "q": "Why is no one friends with Dracula?",
        "a": "Because he's a pain in the neck."
    },
    {
        "q": "",
        "a": "A man got hit in the head with a can of Coke, but he was alright because it was a soft drink."
    },
    {
        "q": "What is the leading cause of dry skin?",
        "a": "Towels"
    },
    {
        "q": "",
        "a": "A man walked in to a bar with some asphalt on his arm. He said \"Two beers please, one for me and one for the road.\""
    },
    {
        "q": "Did you know the first French fries weren't actually cooked in France?",
        "a": "They were cooked in Greece."
    },
    {
        "q": "",
        "a": "I'll tell you something about German sausages, they're the wurst"
    },
    {
        "q": "Where did Captain Hook get his hook?",
        "a": "From a second hand store."
    },
    {
        "q": "",
        "a": "I got fired from a florist, apparently I took too many leaves."
    },
    {
        "q": "",
        "a": "Two silk worms had a race. They ended up in a tie."
    },
    {
        "q": "",
        "a": "I got fired from the transmission factor, turns out I didn't put on enough shifts..."
    },
    {
        "q": "Where do young cows eat lunch?",
        "a": "In the calf-ateria."
    },
    {
        "q": "",
        "a": "I went to the doctor today and he told me I had type A blood but it was a type O."
    },
    {
        "q": "How does a French skeleton say hello?",
        "a": "Bone-jour."
    },
    {
        "q": "Why was the big cat disqualified from the race?",
        "a": "Because it was a cheetah."
    },
    {
        "q": "What do prisoners use to call each other?",
        "a": "Cell phones."
    },
    {
        "q": "What's E.T. short for?",
        "a": "He's only got little legs."
    },
    {
        "q": "What kind of award did the dentist receive?",
        "a": "A little plaque."
    },
    {
        "q": "Do you know where you can get chicken broth in bulk?",
        "a": "The stock market."
    },
    {
        "q": "What's orange and sounds like a parrot?",
        "a": "A Carrot."
    },
    {
        "q": "",
        "a": "A Sandwich walks into a bar, the bartender says \"Sorry, we don't serve food here\""
    },
    {
        "q": "What do you get hanging from Apple trees?",
        "a": "Sore arms."
    },
    {
        "q": "",
        "a": "I thought about going on an all-almond diet. But that's just nuts."
    },
    {
        "q": "",
        "a": "I don't play soccer because I enjoy the sport. I'm just doing it for kicks."
    },
    {
        "q": "",
        "a": "Today a girl said she recognized me from vegetarian club, but I'm sure I've never met herbivore."
    },
    {
        "q": "How do you organize a space party?",
        "a": "You planet."
    },
    {
        "q": "How do you make holy water?",
        "a": "You boil the hell out of it."
    },
    {
        "q": "A man is washing the car with his son. The son asks...... \"Dad, can't you just use a sponge?",
        "a": "\""
    },
    {
        "q": "",
        "a": "They laughed when I said I wanted to be a comedian \u2013 they're not laughing now."
    },
    {
        "q": "What does an angry pepper do?",
        "a": "It gets jalape\u00f1o face."
    },
    {
        "q": "",
        "a": "Don't buy flowers at a monastery. Because only you can prevent florist friars."
    },
    {
        "q": "Hostess: Do you have a preference of where you sit?",
        "a": "Dad: Down."
    },
    {
        "q": "Did you hear about the submarine industry?",
        "a": "It really took a dive..."
    },
    {
        "q": "",
        "a": "The biggest knight at King Arthur's round table was Sir Cumference. He acquired his size from eating too much pi."
    },
    {
        "q": "",
        "a": "To the person who stole my anti-depressant pills: I hope you're happy now."
    },
    {
        "q": "How do you get a baby alien to sleep?",
        "a": "You rocket."
    },
    {
        "q": "Why do pirates not know the alphabet?",
        "a": "They always get stuck at \"C\"."
    },
    {
        "q": "Did you hear about the chameleon who couldn't change color?",
        "a": "They had a reptile dysfunction."
    },
    {
        "q": "Why did the house go to the doctor?",
        "a": "It was having window panes."
    },
    {
        "q": "",
        "a": "I made a playlist for hiking. It has music from Peanuts, The Cranberries, and Eminem. I call it my Trail Mix."
    },
    {
        "q": "What do you call a dictionary on drugs?",
        "a": "High definition."
    },
    {
        "q": "",
        "a": "A Skeleton walked into a bar he said I need a beer and a mop"
    },
    {
        "q": "How do robots eat guacamole?",
        "a": "With computer chips."
    },
    {
        "q": "Today, my son asked \"Can I have a book mark?",
        "a": "\" and I burst into tears. 11 years old and he still doesn't know my name is Brian."
    },
    {
        "q": "When does a joke become a dad joke?",
        "a": "When it becomes apparent."
    },
    {
        "q": "What's brown and sounds like a bell?",
        "a": "Dung!"
    },
    {
        "q": "Why do crabs never give to charity?",
        "a": "Because they're shellfish."
    },
    {
        "q": "What do you call a pig with three eyes?",
        "a": "Piiig"
    },
    {
        "q": "How do you make a hankie dance?",
        "a": "Put a little boogie in it."
    },
    {
        "q": "",
        "a": "Sgt.: Commissar! Commissar! The troops are revolting! Commissar: Well, you're pretty repulsive yourself."
    },
    {
        "q": "",
        "a": "The other day I was listening to a song about superglue, it's been stuck in my head ever since."
    },
    {
        "q": "",
        "a": "If you're struggling to think of what to get someone for Christmas. Get them a fridge and watch their face light up when they open it."
    },
    {
        "q": "",
        "a": "The great thing about stationery shops is they're always in the same place..."
    },
    {
        "q": "Did you hear about the cheese who saved the world?",
        "a": "It was Legend-dairy!"
    },
    {
        "q": "What do you call cheese by itself?",
        "a": "Provolone."
    },
    {
        "q": "How do you fix a broken pizza?",
        "a": "With tomato paste."
    },
    {
        "q": "What's red and bad for your teeth?",
        "a": "A Brick."
    },
    {
        "q": "",
        "a": "I heard there was a new store called Moderation. They have everything there"
    },
    {
        "q": "",
        "a": "A beekeeper was indicted after he confessed to years of stealing at work. They charged him with emBEEzlement"
    },
    {
        "q": "",
        "a": "I used to work for a soft drink can crusher. It was soda pressing."
    },
    {
        "q": "Why did the chicken get a penalty?",
        "a": "For fowl play."
    },
    {
        "q": "",
        "a": "When Dad drops a pea off of his plate \u2018oh dear I've pee'd on the table!"
    },
    {
        "q": "",
        "a": "My cat was just sick on the carpet, I don't think it's feline well."
    },
    {
        "q": "Why did the burglar hang his mugshot on the wall?",
        "a": "To prove that he was framed!"
    },
    {
        "q": "",
        "a": "I dreamed about drowning in an ocean made out of orange soda last night. It took me a while to work out it was just a Fanta sea."
    },
    {
        "q": "",
        "a": "I had a dream that I was a muffler last night. I woke up exhausted!"
    },
    {
        "q": "",
        "a": "Doctor you've got you help me, I'm addicted to twitter. Doctor: I don't follow you."
    },
    {
        "q": "",
        "a": "My boss told me to have a good day. So I went home..."
    },
    {
        "q": "",
        "a": "I broke my finger at work today, on the other hand I'm completely fine."
    },
    {
        "q": "",
        "a": "I went to a book store and asked the saleswoman where the Self Help section was, she said if she told me it would defeat the purpose."
    },
    {
        "q": "How does a scientist freshen their breath?",
        "a": "With experi-mints!"
    },
    {
        "q": "What has ears but cannot hear?",
        "a": "A field of corn."
    },
    {
        "q": "",
        "a": "People who don't eat gluten are really going against the grain."
    },
    {
        "q": "",
        "a": "Sore throats are a pain in the neck!"
    },
    {
        "q": "How did Darth Vader know what Luke was getting for Christmas?",
        "a": "He felt his presents."
    },
    {
        "q": "What's the difference between a seal and a sea lion?",
        "a": "An ion!"
    },
    {
        "q": "",
        "a": "I think circles are pointless."
    },
    {
        "q": "What did the Dorito farmer say to the other Dorito farmer?",
        "a": "Cool Ranch!"
    },
    {
        "q": "",
        "a": "A ghost walks into a bar and asks for a glass of vodka but the bar tender says, \"sorry we don't serve spirits\""
    },
    {
        "q": "",
        "a": "You know what they say about cliffhangers..."
    },
    {
        "q": "Why do wizards clean their teeth three times a day?",
        "a": "To prevent bat breath!"
    },
    {
        "q": "",
        "a": "Feeling pretty proud of myself. The Sesame Street puzzle I bought said 3-5 years, but I finished it in 18 months."
    },
    {
        "q": "A termite walks into a bar and asks \"Is the bar tender here?",
        "a": "\""
    },
    {
        "q": "Why are fish so smart?",
        "a": "Because they live in schools!"
    },
    {
        "q": "How does the moon cut his hair?",
        "a": "Eclipse it."
    },
    {
        "q": "Why did the worker get fired from the orange juice factory?",
        "a": "Lack of concentration."
    },
    {
        "q": "",
        "a": "I couldn't get a reservation at the library. They were completely booked."
    },
    {
        "q": "Dad, can you put my shoes on?",
        "a": "I don't think they'll fit me."
    },
    {
        "q": "How do you get two whales in a car?",
        "a": "Start in England and drive West."
    },
    {
        "q": "What do you call an Argentinian with a rubber toe?",
        "a": "Roberto"
    },
    {
        "q": "",
        "a": "I tried taking some high resolution photos of local farmland, but they all turned out a bit grainy."
    },
    {
        "q": "What did the ocean say to the shore?",
        "a": "Nothing, it just waved."
    },
    {
        "q": "",
        "a": "I went to the zoo the other day, there was only one dog in it. It was a shitzu."
    },
    {
        "q": "",
        "a": "I gave all my dead batteries away today, free of charge."
    },
    {
        "q": "Did you hear the news?",
        "a": "FedEx and UPS are merging. They're going to go by the name Fed-Up from now on."
    },
    {
        "q": "Why didn't the number 4 get into the nightclub?",
        "a": "Because he is 2 square."
    },
    {
        "q": "What do you call a sheep with no legs?",
        "a": "A cloud."
    },
    {
        "q": "Why did the m&m go to school?",
        "a": "Because it wanted to be a Smartie!"
    },
    {
        "q": "Did you hear that David lost his ID in prague?",
        "a": "Now we just have to call him Dav."
    },
    {
        "q": "",
        "a": "My wife is on a tropical fruit diet, the house is full of stuff. It is enough to make a mango crazy."
    },
    {
        "q": "Why are basketball players messy eaters?",
        "a": "Because they are always dribbling."
    },
    {
        "q": "Why do mathematicians hate the U.S.?",
        "a": "Because it's indivisible."
    },
    {
        "q": "",
        "a": "I knew i shouldn't have ate that seafood. Because now i'm feeling a little\u2026 Eel"
    },
    {
        "q": "",
        "a": "Past, present, and future walked into a bar.... It was tense."
    },
    {
        "q": "Did you hear about the bread factory burning down?",
        "a": "They say the business is toast."
    },
    {
        "q": "",
        "a": "My boss told me that he was going to fire the person with the worst posture. I have a hunch, it might be me."
    },
    {
        "q": "What's black and white and read all over?",
        "a": "The newspaper."
    },
    {
        "q": "Why are skeletons so calm?",
        "a": "Because nothing gets under their skin."
    },
    {
        "q": "",
        "a": "Without geometry life is pointless."
    },
    {
        "q": "",
        "a": "\"Hold on, I have something in my shoe\"  \"I'm pretty sure it's a foot\""
    },
    {
        "q": "",
        "a": "Have you heard about the film \"Constipation\", you probably haven't because it's not out yet."
    },
    {
        "q": "",
        "a": "I hate perforated lines, they're tearable."
    },
    {
        "q": "",
        "a": "I asked the surgeon if I could administer my own anesthetic, they said: go ahead, knock yourself out."
    },
    {
        "q": "Why did the barber win the race?",
        "a": "He took a short cut."
    },
    {
        "q": "Why did the octopus beat the shark in a fight?",
        "a": "Because it was well armed."
    },
    {
        "q": "What did the judge say to the dentist?",
        "a": "Do you swear to pull the tooth, the whole tooth and nothing but the tooth?"
    },
    {
        "q": "\"What time is it?",
        "a": "\" I don't know... it keeps changing."
    },
    {
        "q": "",
        "a": "You can't trust a ladder. It will always let you down"
    },
    {
        "q": "",
        "a": "I am so good at sleeping I can do it with my eyes closed!"
    },
    {
        "q": "",
        "a": "I wouldn't buy anything with velcro. It's a total rip-off."
    },
    {
        "q": "What are the strongest days of the week?",
        "a": "Saturday and Sunday...the rest are weekdays."
    },
    {
        "q": "",
        "a": "My friend said to me: \"What rhymes with orange\" I said: \"no it doesn't\""
    },
    {
        "q": "",
        "a": "I had a rough day, and then somebody went and ripped the front and back pages from my dictionary. It just goes from bad to worse."
    },
    {
        "q": "",
        "a": "I adopted my dog from a blacksmith. As soon as we got home he made a bolt for the door."
    },
    {
        "q": "Where does batman go to the bathroom?",
        "a": "The batroom."
    },
    {
        "q": "",
        "a": "Some people say that comedians who tell one too many light bulb jokes soon burn out, but they don't know watt they are talking about. They're not that bright."
    },
    {
        "q": "",
        "a": "A bartender broke up with her boyfriend, but he kept asking her for another shot."
    },
    {
        "q": "What do you call a cow on a trampoline?",
        "a": "A milk shake!"
    },
    {
        "q": "What do you call a nervous javelin thrower?",
        "a": "Shakespeare."
    },
    {
        "q": "What do you call an eagle who can play the piano?",
        "a": "Talonted!"
    },
    {
        "q": "What do you call a boomerang that won't come back?",
        "a": "A stick."
    },
    {
        "q": "What do you call a duck that gets all A's?",
        "a": "A wise quacker."
    },
    {
        "q": "",
        "a": "I used to work for an origami company but they folded."
    },
    {
        "q": "",
        "a": "There's a new type of broom out, it's sweeping the nation."
    },
    {
        "q": "",
        "a": "I just wrote a book on reverse psychology. Do not read it!"
    },
    {
        "q": "",
        "a": "The shovel was a ground-breaking invention."
    },
    {
        "q": "Why don't seagulls fly over the bay?",
        "a": "Because then they'd be bay-gulls!"
    },
    {
        "q": "",
        "a": "Parallel lines have so much in common. It's a shame they'll never meet."
    },
    {
        "q": "",
        "a": "The best time on a clock is 6:30--hands down."
    },
    {
        "q": "What do you call a magician who has lost their magic?",
        "a": "Ian."
    },
    {
        "q": "Why do fish live in salt water?",
        "a": "Because pepper makes them sneeze!"
    },
    {
        "q": "When do doctors get angry?",
        "a": "When they run out of patients."
    },
    {
        "q": "",
        "a": "A man tried to sell me a coffin today. I told him that's the last thing I need."
    },
    {
        "q": "",
        "a": "It doesn't matter how much you push the envelope. It will still be stationary."
    },
    {
        "q": "What did the shy pebble wish for?",
        "a": "That she was a little boulder."
    },
    {
        "q": "Why did the belt go to prison?",
        "a": "He held up a pair of pants!"
    },
    {
        "q": "",
        "a": "Wife told me to take the spider out instead of killing it... We had some drinks, cool guy, wants to be a web developer."
    },
    {
        "q": "What cheese can never be yours?",
        "a": "Nacho cheese."
    },
    {
        "q": "What is a vampire's favorite fruit?",
        "a": "A blood orange."
    },
    {
        "q": "",
        "a": "A cannibal is someone who is fed up with people."
    },
    {
        "q": "Why did the cookie cry?",
        "a": "Because his mother was a wafer so long"
    },
    {
        "q": "Want to hear my pizza joke?",
        "a": "Never mind, it's too cheesy."
    },
    {
        "q": "What did the grape do when he got stepped on?",
        "a": "He let out a little wine."
    },
    {
        "q": "What did the 0 say to the 8?",
        "a": "Nice belt."
    },
    {
        "q": "Why was the picture sent to prison?",
        "a": "It was framed."
    },
    {
        "q": "",
        "a": "Two peanuts were walking down the street. One was a salted."
    },
    {
        "q": "",
        "a": "I burned 2000 calories today, I left my food in the oven for too long."
    },
    {
        "q": "",
        "a": "Cosmetic surgery used to be such a taboo subject.\r\nNow you can talk about Botox and nobody raises an eyebrow."
    },
    {
        "q": "How can you tell a vampire has a cold?",
        "a": "They start coffin."
    },
    {
        "q": "",
        "a": "At the boxing match, the dad got into the popcorn line and the line for hot dogs, but he wanted to stay out of the punchline."
    },
    {
        "q": "\"Hey, dad, did you get a haircut?",
        "a": "\" \"No, I got them all cut.\""
    },
    {
        "q": "Why is there always a gate around cemeteries?",
        "a": "Because people are always dying to get in."
    },
    {
        "q": "",
        "a": "I asked a frenchman if he played video games. He said \"Wii\""
    },
    {
        "q": "",
        "a": "My dentist is the best, he even has a little plaque!"
    },
    {
        "q": "",
        "a": "So, I heard this pun about cows, but it's kinda offensive so I won't say it. I don't want there to be any beef between us."
    },
    {
        "q": "What do Alexander the Great and Winnie the Pooh have in common?",
        "a": "Same middle name."
    },
    {
        "q": "What kind of music do planets listen to?",
        "a": "Nep-tunes."
    },
    {
        "q": "",
        "a": "Shout out to my grandma, that's the only way she can hear."
    },
    {
        "q": "Why was the broom late for the meeting?",
        "a": "He overswept."
    },
    {
        "q": "",
        "a": "I went on a date last night with a girl from the zoo. It was great. She's a keeper."
    },
    {
        "q": "Why do you never see elephants hiding in trees?",
        "a": "Because they're so good at it."
    },
    {
        "q": "",
        "a": "Mahatma Gandhi, as you know, walked barefoot most of the time, which produced an impressive set of calluses on his feet. \r\nHe also ate very little, which made him rather frail and with his odd diet, he suffered from bad breath. \r\nThis made him a super calloused fragile mystic hexed by halitosis."
    },
    {
        "q": "What do you call an alligator in a vest?",
        "a": "An in-vest-igator!"
    },
    {
        "q": "What did celery say when he broke up with his girlfriend?",
        "a": "She wasn't right for me, so I really don't carrot all."
    },
    {
        "q": "",
        "a": "Thanks for explaining the word \"many\" to me. It means a lot."
    },
    {
        "q": "What's brown and sticky?",
        "a": "A stick."
    },
    {
        "q": "What biscuit does a short person like?",
        "a": "Shortbread."
    },
    {
        "q": "",
        "a": "The invention of the wheel was what got things rolling"
    },
    {
        "q": "Why was Santa's little helper feeling depressed?",
        "a": "Because he has low elf esteem."
    },
    {
        "q": "Why did Sweden start painting barcodes on the sides of their battleships?",
        "a": "So they could Scandinavian."
    },
    {
        "q": "Want to hear a chimney joke?",
        "a": "Got stacks of em! First one's on the house"
    },
    {
        "q": "What do you call a pig that knows karate?",
        "a": "A pork chop!"
    },
    {
        "q": "",
        "a": "If two vegans are having an argument, is it still considered beef?"
    },
    {
        "q": "",
        "a": "My sea sickness comes in waves."
    },
    {
        "q": "",
        "a": "For Valentine's day, I decided to get my wife some beads for an abacus.  It's the little things that count."
    },
    {
        "q": "What's the worst thing about ancient history class?",
        "a": "The teachers tend to Babylon."
    },
    {
        "q": "",
        "a": "My new thesaurus is terrible. In fact, it's so bad, I'd say it's terrible."
    },
    {
        "q": "What type of music do balloons hate?",
        "a": "Pop music!"
    },
    {
        "q": "Do you want a brief explanation of what an acorn is?",
        "a": "In a nutshell, it's an oak tree."
    },
    {
        "q": "How come a man driving a train got struck by lightning?",
        "a": "He was a good conductor."
    },
    {
        "q": "",
        "a": "Camping is intense."
    },
    {
        "q": "",
        "a": "Dad died because he couldn't remember his blood type. I will never forget his last words. Be positive."
    },
    {
        "q": "",
        "a": "I'm on a whiskey diet. I've lost three days already."
    },
    {
        "q": "How does Darth Vader like his toast?",
        "a": "On the dark side."
    },
    {
        "q": "Why didn't the orange win the race?",
        "a": "It ran out of juice."
    },
    {
        "q": "Did you hear about the runner who was criticized?",
        "a": "He just took it in stride"
    },
    {
        "q": "What animal is always at a game of cricket?",
        "a": "A bat."
    },
    {
        "q": "Why did the Clydesdale give the pony a glass of water?",
        "a": "Because he was a little horse!"
    },
    {
        "q": "",
        "a": "I started a new business making yachts in my attic this year...the sails are going through the roof"
    },
    {
        "q": "",
        "a": "If you think swimming with dolphins is expensive, you should try swimming with sharks--it cost me an arm and a leg!"
    },
    {
        "q": "What did the Buffalo say to his little boy when he dropped him off at school?",
        "a": "Bison."
    },
    {
        "q": "",
        "a": "I used to have a job at a calendar factory but I got the sack because I took a couple of days off."
    },
    {
        "q": "",
        "a": "I am terrified of elevators. I'm going to start taking steps to avoid them."
    },
    {
        "q": "Why do bees have sticky hair?",
        "a": "Because they use honey combs!"
    },
    {
        "q": "Did you know you should always take an extra pair of pants golfing?",
        "a": "Just in case you get a hole in one."
    },
    {
        "q": "",
        "a": "I wish I could clean mirrors for a living. It's just something I can see myself doing."
    },
    {
        "q": "How do the trees get on the internet?",
        "a": "They log on."
    },
    {
        "q": "",
        "a": "To the guy who invented zero... thanks for nothing."
    },
    {
        "q": "What lies at the bottom of the ocean and twitches?",
        "a": "A nervous wreck."
    },
    {
        "q": "What is red and smells like blue paint?",
        "a": "Red paint!"
    },
    {
        "q": "",
        "a": "*Reversing the car* \"Ah, this takes me back\""
    },
    {
        "q": "",
        "a": "Doctor you've got to help me, I'm addicted to Twitter. Doctor: I don't follow you."
    },
    {
        "q": "How do locomotives know where they're going?",
        "a": "Lots of training"
    },
    {
        "q": "How did the hipster burn the roof of his mouth?",
        "a": "He ate the pizza before it was cool."
    },
    {
        "q": "",
        "a": "A butcher accidentally backed into his meat grinder and got a little behind in his work that day."
    },
    {
        "q": "Did you hear about the new restaurant on the moon?",
        "a": "The food is great, but there's just no atmosphere."
    },
    {
        "q": "What do you call a beehive without the b's?",
        "a": "An eehive."
    },
    {
        "q": "What kind of pants do ghosts wear?",
        "a": "Boo jeans."
    },
    {
        "q": "",
        "a": "Two guys walked into a bar, the third one ducked."
    },
    {
        "q": "",
        "a": "I really want to buy one of those supermarket checkout dividers, but the cashier keeps putting it back."
    },
    {
        "q": "",
        "a": "A horse walks into a bar. The bar tender says \"Hey.\" The horse says \"Sure.\""
    },
    {
        "q": "Did you hear about the guy who invented Lifesavers?",
        "a": "They say he made a mint."
    },
    {
        "q": "What's the difference between a poorly dressed man on a tricycle and a well dressed man on a bicycle?",
        "a": "Attire."
    },
    {
        "q": "Why are giraffes so slow to apologize?",
        "a": "Because it takes them a long time to swallow their pride."
    },
    {
        "q": "",
        "a": "\"Dad, I'm hungry.\" Hello, Hungry. I'm Dad."
    },
    {
        "q": "",
        "a": "I'm practicing for a bug-eating contest and I've got butterflies in my stomach."
    },
    {
        "q": "",
        "a": "I have the heart of a lion... and a lifetime ban from the San Diego Zoo."
    },
    {
        "q": "What do you call a guy lying on your doorstep?",
        "a": "Matt."
    },
    {
        "q": "",
        "a": "I met this girl on a dating site and, I don't know, we just clicked."
    },
    {
        "q": "What did the calculator say to the student?",
        "a": "You can count on me."
    },
    {
        "q": "What do you call a gorilla wearing headphones?",
        "a": "Anything you'd like, it can't hear you."
    },
    {
        "q": "Have you heard about corduroy pillows?",
        "a": "They're making headlines!"
    }
];