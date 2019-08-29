const Discord = require("discord.js");
const bot = new Discord.Client();
const token = 'NjAzMjYxNDg1NTY4ODg0NzQ5.XTc1Kw.2w1-OPiy0bror_LtCXw3cfjbXUs';

const PREFIX = '*';

bot.on('ready', () => {
    console.log('online');
})

bot.on('message', message => {
    if (message.content.startsWith('*') == false) return

    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'ping':
            message.channel.sendMessage('pong');
            break;
        case 'info':
            message.channel.sendMessage('```Use prefix * for commands! \n\nInfo - Lists commands, \nPing - Pong, \n[char] - Lists move stats of character(note:some characters have multiple pages and does not include spaces or UpPeRcAsE letters)```')
            break;
        case 'mario':
            message.channel.sendMessage('```High Tier \nJab1 - 2.2%-19 total frames, transitions to Jab2 as early as frame 5 \nJab2 - 1.7%-21 total frames, transitons to aJab3 as early as frame 6 \nJab3 - 4%-33 total frames \nForward Tilt - 7%-25 total frames \nUp Tilt - 5.5%-29 total frames \nDown Tilt - sweetspot 7% (Close/Far) sourspot 5%-27 total frames \nDash Attack sweetspot 8% (early/late) sourspot 6%-37 total frames \nFoward Smash - sweetspot 17.7% (far/close) sourspot 14.6%-47 total frames, charge hold is frame 5 \nUp Smash - 14%-39 total frames, head invulnerability on frame 9 - 12. Charge hold is frame 6 \nDown Smash - sweetspot 10% (first/second) sourspot 12%-43 frames \nNair - sweetspot 8% (early/late) sourspot 5%-45 total frames, auto cancels on frame 1-2 and frame 39 onward \nFair - sweetspot 14% (meteor/early) sourspot 12%-59 total frames, auto cancels on frame 1-2 and frame 43 onward \nBair - sweetspot 10.5% (early/late) sourspot 7%-33 frames, auto cancels on frame 1-5 and frame 19 onward \nUp Air - sweetspot 7% (early/late) sourspot 5.9%-30 total frames autocancels on frame 17 onward \nDair - sourspot 1.3% (multihit/final/landing) sweetspot 5.5%-37 total frames, auto cancels on frame 1-4 and frame 33 onward \nFireball/Neutral -  sweetspot 5% (early/late) sourspot 4%-49 total frames, fireball disappears on frame 88 \nCape 7%-35 total frames, reflects on frame 6-20 \nSuper Jump Punch - first 5% mutihit 0.6% final 3%-invulnerable on frame 3-6 \nFLUDD 0%-48 frames, startup is 2 from a charging state. Entering charge state takes 19 frames and is shield cancellable on 20 \nFullCharge FLUDD 0%-67 total frames, takes 100 frames to reach full charge \ngrab - 34 total frames \ndash grab - 42 total frames \npivot grab - 36 total frames \npummel - 1.3%-19 total frames, total frames include 15 frames of hitlag. Frames include landing lag \nforward throw - 8%-27 total frames \nbackward throw - 11%-39 total frames \nup throw - 7%-39 total frames \ndown throw - 5%-39 total frames```')
        case 'donkeykong1':
            message.channel.sendMessage('```Mid Tier \nJab1- 4%, 5 frame startup, 24 total frames, can transition to jab2 as early as frame 8 \nJab2- 6%, 5 frame startup 34 total frames \nForward Tilt- sweetspot 9% (angled up/down) sourspot 8% (no angle), 7 frame startup, 34 total frames, arm intangibility on frames 6-9 \nUp Tilt- 10%, 5 frame startup, 38 total frames, arm intangibility on frames 5-11 \nDown Tilt- 6%, 6 frame startup, 24 total frames, arm intangibility on frames 5-7 \nDash Attack- sweetspot 12% (early hit) sourspot 9% (late hit), 9 frame startup, 34 total frames \nFoward Smash- sweetspot 22% (far) sourspot 21% (close), 22 frame startup, 54 total frames, arm and head intangibility on frames 20-26, charge hold is frame 14 \nUp Smash- 19%, 14 frame startup, 49 total frames, arm and head intangibility on frames 12-15, charge hold is frame 6 \nDown Smash- 17%, 11 frame startup, 55 total frames, arm intangibility on frames 11-14, charge hold is frame 2 \nNair- sweetspot 11% (early hit) sourspot 8% (late hit), 10 frame startup, 38 total frames, autocancels on frames 1-9 and 27 onwards \nFair- 16% (early hit) 15% (spike hitbox), 18 frame startup, 55 total frames, autocancels on frames 56 onwards \nBair- sweetspot 13% (early hit) sourspot 8% (late hit), 7 frame startup, 31 total frames, autocancels on frames 1-6 and 31 onwards \nUp Air- 13%, 6 frame startup, 37 total frames, head intangibility on frames 5-10, autocancels on frames 1-5 and 26 onwards \nDair- 16%, 14 frame startup, 54 total frames, autocancels on frames 1-2 and 50 onwards \n\nsee page 2 for rest of info```')
        case 'donkeykong2':
            message.channel.sendMessage('```Mid Tier \nNeutral B - 10-27% (based on charge), 19(+7) frame startup, 62 total frames, entering charge window takes 7 frames; 4 to cancel with shield, arm intangibility on frames 4-20 \nNeutral B full charge - 28%, 19 frame startup, 47 total frames, super armor on frame 11-20 on the ground, takes 131 frames to fully charge \nSide B - 10%, 20 frame startup, 62 total frames, buries opponents, super armor on frame 5-14 on the ground and in the air \nUp B grounded - 5% (first hit) 1.3% (the 5 multihits) 4% (final hit), 19/25/32/40/49/55/62, 104 total frames, super armor on frames 8-17, arm intangibility on frames 19-24 \nUp B in the air - 5% (first hit) 1% (multihits) 2% (final hit), first hit frame 4, the move hits inconsistently after frame 12, arm intangibility on frames 104 \nDown B grounded - 14%, 15/26 frame startup, 57 total frames, each additional rep takes another 27 frames as you mash \nDown B in the air - first hit 5% second hit 6%, 19/26 frame startup, 49 total frames, each hit spikes \nGrab- 8 frame startup, 38 total frames \nDash Grab- 11 frame startup, 46 total frames \nPivot Grab- 12 frame startup, 41 total frames \nPummel- 1.6% per hit  \nCargo Forward Throw- 12% \nCargo Back Throw- 13% \nCargo Up Throw- 12% \nCargo Down Throw- 11% \nBack Throw- 11% \nUp Throw- 9% \nDown Throw- 7%` \n\nsee page 2 for more info``')
        case 'robin1':
            message.channel.sendMessage('```Mid-Tier \nJab 1- 2%, 4 frame startup, 31 total frames, transitions to jab 2 as early as frame 9 \nJab 2- 1.5%, 5 frame startup, 34 total frames, transitions to jab 3 as early as frame 9 or rapid jab on frame 8 \nJab 3- 5%, 6 frame startup, 35 total frames \nRapid Jab- .7% per hit, 4/6/8… frame startup, letting go of the attack button triggers rapid jab finisher \nRapid Jab Finisher- 2%, 5 frame startup, 47 total frames \nForward Tilt- 7.5%, 9 frame startup, 32 total frames \nUp Tilt- 7.5%, 6 frame startup, 32 total frames \nDown Tilt- 6%, 7 frame startup, 21 total frames \nDash Attack- sweetspot 10% (early hit) sourspot 6% (late hit), 8 frame startup, 41 total frames \nForward Smash- sweetspot 16% (early hit) sourspot 10% (late hit) Bronze Sword 9.6%, 16 frame startup, 57 total frames, charge hold is frame 6 \nUp Smash- sourspot 10% (close hit) sweetspot 15% (far hit) Bronze Sword 9%, 12 frame startup, 52 total frames, charge hold is frame 5 \nDown Smash- 15% Spark 12% Bronze Sword 8%, 16 frame startup, 56 total frames, charge hold is frame 3, sparks generate on frame 20 for Levin Sword version \n\nsee page 3 for rest of info```')
        case 'robin2':
            message.channel.sendMessage('```Mid-Tier \nNair- Levin Sword 11.5% Bronze Sword 6.9%, 9/22 frame startup, 49 total frames, autocancels on frames 1-3 and 34 (Bronze Sword)/42 (Levin Sword) onwards \nFair- Levin Sword 12.5% Bronze Sword 7.5%, 12 frame startup, 33 total frames, autocancels on frames 1-3 and 27 (Bronze Sword)/28 (Levin Sword) onwards \nBair- Levin Sword sweetspot 15% (early hit) Levin Sword sourspot 5% (late hit) Bronze Sword 9%, 9 frames startup, 39 total frames, autocancels on frames 32 onwards n\Up Air- Levin Sword sweetspot 13% (early hit) Levin Sword sourspot 5% (late hit) Bronze Sword 7.8%, 10 frame startup, 45 total frames, autocancels on frames 1-4 and 27 (Bronze Sword)/28 (Levin Sword) onwards \nDair- Levin Sword sweetspot & spike 11% (early hit) Levin Sword sourspot 8% (late hit) Bronze Sword sweetspot 7.2% (early hit) Bronze Sword sourspot 6% (late hit), 13 frame startup, 59 total frames, autocancels on frame 48 onwards```')
        case 'robin3':
            message.channel.sendMessage('```Mid-Tier \nNeutral Special(Thunder/Elthunder)- Thunder 5.5% Elthunder 11%, 8 frame startup, 32/38 total frames, 7 frames to enter charge state; 4 to cancel charge with shield, 38 frames to reach Elthunder, 88 frames to reach Archtunder, 148 frames to reach Thoron \nNeutral Special (Arcthunder)- first hit 6% multihits 2.4% final hit 8%, 1/5/9/13/16 frame startup, 38 total frames \nNeutral Special (Thoron)-  2.6% (multihit) 2.6% (final hit), 23/27/31/35/39/43/47 frame startup, 74 total frames \nSide Special (Arcfire)- first hit 2% multihits 1.3% final hit 4%, 17 frame startup, 63 total frames, pillar hits once every 8 frames, ending on frame 50 \nUp Special (Elwind)- sweetspot 7% (early hit) sourspot 5% (late hit), 8/28 frame startup \nDown Special (Nosferatu)- no particular base damage, 15 frame startup, 49 total frames, invulnerable on frames 15-18, 31 frames animation for releasing victim, heals self in proportion to damage given \nGrab- 7 frame startup, 39 total frames \nDash Grab- 10 frame startup, 47 total frames \nPivot Grab- 11 frame startup, 42 total frames \nPummel- 1.5%, 1 frame startup, 21 total frames, total frames include 16 frames of hitlag \nForward Throw- 8% \nBack Throw- 11% **kill throw** \nUp Throw- 9% \nDown Throw- 6% **combo throw** \nTomes: \nThunder- 20 charges, Thunder costs 1, Elthunder costs 3, Arcthunder costs 5, Thoron costs 8, recharge time approx 12 seconds \nFire- 12 charges, Arcfire costs 2, Jab 3 costs 1, recharge time approx 12 seconds \nWind: 10 charges, Elwind costs 1 or 2, Rapid Jab costs 2 minimum, recharge time approx 6 seconds \nDark- 3 charges, Nosferatu costs 1, recharge time approx 30 seconds \nLevin Sword- has 8 charges, Forward Smash, Up Smash, Down Smash, Forward Air, Back Air, Up Air, and Down Air use1 charge (when Levin Sword is used, not Bronze Sword), recharge time approx 10 seconds```')
        case 'kick':

            if (!args[1]) message.channel.send('you need to specify a person!')

            const user2 = message.mentions.users.first();

            if(user2){
                const member = message.guild.member(user2);

                if(member){
                    member.kick('You were kicked for trolling').then(() =>{
                        message.reply(`Sucessfully kicked ${user2.tag}`)
                    }).catch(err =>{
                        message.reply('I was unable to kick the member')
                        console.log(err);
                    });
                } else{
                    message.sendMessage("That user isn't in this discord")
                }
            } else {
                message.reply('You need to specify a person')
            }

            break;

    }
})

bot.login(token)