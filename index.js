const Discord = require('discord.js');
var { prefix, token } = require('./config.json');
const client = new Discord.Client();
const version = 1.1

var songId = -1

const songs = [
    'KOCK_MUSIC/a.mp3', 'KOCK_MUSIC/b.mp3', 'KOCK_MUSIC/c.mp3', 'KOCK_MUSIC/d.mp3', 'KOCK_MUSIC/e.mp3', 'KOCK_MUSIC/f.mp3', 'KOCK_MUSIC/g.mp3', 'KOCK_MUSIC/h.mp3', 'KOCK_MUSIC/i.mp3', 'KOCK_MUSIC/j.mp3']

client.once('ready', () => {
    //client.user.setStatus('dnd')
    client.user.setActivity('kolabot help',{type: 'PLAYING'});
    console.log('Ready!');
});

client.on('message', async message => {
    if (message.content === 'hello baby') {
        message.reply('what\'s up sexy')
    } else if (message.content === 'nigga') {
        message.react('😳')
    } else if (message.content === 'sex') {
        message.react('👀')
    } else if (message.content === 'fuck') {
        message.channel.send('me')
    } else if (message.content === 'komaeda') {
        message.channel.send('don\'t mention that name')
    } else if (message.content === 'kolabot') {
        message.reply('that\'s me')
    } else if (message.content === 'KOCK') {
        message.channel.send('KOCK is the world.')
    }

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    // Commands begin here //
    if (command === 'help') {
        message.channel.send(`
        WASSUP GANGSTAS. MY NAME IS KOLABOT.
        My prefix in this GANGSTA server is ${prefix}.
        \n__***KOLARADIO***__
        Use KOLARADIO to start the KOCK Radio.
        Use nowplaying to see what KOCK song is playing.
        Use KOLASONG to play a KOCK song.
        Use disconnect to disconnect.
        \n***KOLA COMMANDS:***
        help - displays this menu
        info/information - show's bot information and creator
        github - view KOLABOT source
        server - displays server info
        user-info - displays user info (why the fuck do i need to put descriptions)
        avatar - display a user's profile picture
        purge - bulk delete messages (admin only)`)

        //KOLARADIO
    } else if (message.content === `${prefix}KOLARADIO`) {
        if (message.member.voice.channel) {
            function playSong() {
                songId = Math.floor(Math.random() * songs.length);
                connection.play(songs[songId]).on("finish", playSong);
            }

            const connection = await message.member.voice.channel.join();
            playSong()
        }

    } else if (message.content === `${prefix}version`) {
        message.channel.send('KOLABOT is on version ' + version)
    

    } else if (message.content === `${prefix}github`) {
        message.channel.send('https://github.com/reelpufferfish/KOLABOT')
    

    } else if (message.content === `${prefix}info`) {
        message.channel.send('This is KOLABOT made by Pufferfish.\nDiscord: pufferfish#5841 server: https://discord.com/invite/KVvVVWE\nFollow @reelpufferfish on Twitter\nbit.ly/pufferfish69 - YouTube\n\nAll music in this bot is made by KOCK (Soundcloud/KOCKISTHEWORLD) and KOLABOT has all permission to use the music provided.\nGet in contact with the dev Pufferfish via Discord.')


    } else if (message.content === `${prefix}disconnect`) {
        var voiceChannel = message.member.voice.channel;
        voiceChannel.leave();
        songId = -1


    } else if (message.content === `${prefix}nowplaying`) {
        if (songId === -1) {
            message.channel.send('Nothing is playing rn loser')
        }
        if (songId === 0) {
            message.channel.send('Now playing THE KOCK CYPHER™.')
        } else if (songId === 1) {
            message.channel.send('Now playing HOES MAD.')
        } else if (songId === 2) {
            message.channel.send('Now playing SNOWS MAD.')
        } else if (songId === 3) {
            message.channel.send('Now playing JOES MAD.')
        } else if (songId === 4) {
            message.channel.send('Now playing KOCK DESTROYS RACISM')
        } else if (songId === 5) {
            message.channel.send('Now playing COOMER CHRISTMAS')
        } else if (songId === 6) {
            message.channel.send('Now playing GOODBYE JOE')
        } else if (songId === 7) {
            message.channel.send('Now playing DEEPTHROAT MY DEAGLE')
        } else if (songId === 8) {
            message.channel.send('Now playing CALL YOU ON DA FLIPPHONE')
        } else if (songId === 9) {
            message.channel.send('Now playing FUCK OMAR')
        }

    } else if (message.content === `${prefix}ping`) {
        message.channel.send('pong');


    } else if (message.content === `${prefix}server`) {
        message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}\nCreated at: ${message.guild.createdAt}\nRegion: ${message.guild.region}`);


    } else if (message.content === `${prefix}user-info`) {
        message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);


    } else if (command === "kolasong") {
        if (!args.length) {
            return message.channel.send("These are the tracks KOLABOT can play. Select a track by using command \"kolabot [track number]\".\n> 1. THE KOCK CYPHER™.\n> 2. HOES MAD.\n> 3. SNOWS MAD.\n> 4. JOES MAD.\n> 5. KOCK DESTROYS RACISM\n> 6. COOMER CHRISTMAS\n> 7. GOODBYE JOE\n> 8. DEEPTHROAT MY DEAGLE\n> 9. CALL YOU ON DA FLIPPHONE\n> 10. FUCK OMAR");
        }
        else if (args[0] === '1') {
            if (message.member.voice.channel) {
                songId = 0
                message.channel.send('Now playing THE KOCK CYPHER™.')
                const connection = await message.member.voice.channel.join();
                const dispatcher = connection.play('KOCK_MUSIC/a.mp3')
                dispatcher.on('start', () => {
                    console.log('track 1 is playing');
                });

                dispatcher.on('finish', () => {
                    console.log('track 1 has finished playing');
                })

                dispatcher.on('error', console.error);
            }
        }
        else if (args[0] === '2') {
            if (message.member.voice.channel) {
                songId = 1
                message.channel.send('Now playing HOES MAD.')
                const connection = await message.member.voice.channel.join();
                const dispatcher = connection.play('KOCK_MUSIC/b.mp3')
                dispatcher.on('start', () => {
                    console.log('track 2 is playing');
                });

                dispatcher.on('finish', () => {
                    console.log('track 2 has finished playing');
                })

                dispatcher.on('error', console.error);
            }
        }
        else if (args[0] === '3') {
            if (message.member.voice.channel) {
                songId = 2
                message.channel.send('Now playing SNOWS MAD.')
                const connection = await message.member.voice.channel.join();
                const dispatcher = connection.play('KOCK_MUSIC/c.mp3')
                dispatcher.on('start', () => {
                    console.log('track 3 is playing');
                });

                dispatcher.on('finish', () => {
                    console.log('track 3 has finished playing');
                })

                dispatcher.on('error', console.error);
            }
        }
        else if (args[0] === '4') {
            if (message.member.voice.channel) {
                songId = 3
                message.channel.send('Now playing JOES MAD.')
                const connection = await message.member.voice.channel.join();
                const dispatcher = connection.play('KOCK_MUSIC/d.mp3')
                dispatcher.on('start', () => {
                    console.log('track 4 is playing');
                });

                dispatcher.on('finish', () => {
                    console.log('track 4 has finished playing');
                })

                dispatcher.on('error', console.error);
            }
        }
        else if (args[0] === '5') {
            if (message.member.voice.channel) {
                songId = 4
                message.channel.send('Now playing KOCK DESTROYS RACISM')
                const connection = await message.member.voice.channel.join();
                const dispatcher = connection.play('KOCK_MUSIC/e.mp3')
                dispatcher.on('start', () => {
                    console.log('track 5 is playing');
                });

                dispatcher.on('finish', () => {
                    console.log('track 5  has finished playing');
                })

                dispatcher.on('error', console.error);
            }
        }
        else if (args[0] === '6') {
            if (message.member.voice.channel) {
                songId = 5
                message.channel.send('Now playing COOMER CHRISTMAS')
                const connection = await message.member.voice.channel.join();
                const dispatcher = connection.play('KOCK_MUSIC/f.mp3')
                dispatcher.on('start', () => {
                    console.log('track 6 is playing');
                });

                dispatcher.on('finish', () => {
                    console.log('track 6 has finished playing');
                })

                dispatcher.on('error', console.error);
            }
        }
        else if (args[0] === '7') {
            if (message.member.voice.channel) {
                songId = 6
                message.channel.send('Now playing GOODBYE JOE')
                const connection = await message.member.voice.channel.join();
                const dispatcher = connection.play('KOCK_MUSIC/g.mp3')
                dispatcher.on('start', () => {
                    console.log('track 7 is playing');
                });

                dispatcher.on('finish', () => {
                    console.log('track 7 has finished playing');
                })

                dispatcher.on('error', console.error);
            }
        }
        else if (args[0] === '8') {
            if (message.member.voice.channel) {
                songId = 7
                message.channel.send('Now playing DEEPTHROAT MY DEAGLE')
                const connection = await message.member.voice.channel.join();
                const dispatcher = connection.play('KOCK_MUSIC/h.mp3')
                dispatcher.on('start', () => {
                    console.log('track 8 is playing');
                });

                dispatcher.on('finish', () => {
                    console.log('track 8 has finished playing');
                })

                dispatcher.on('error', console.error);
            }
        }
        else if (args[0] === '9') {
            if (message.member.voice.channel) {
                songId = 8
                message.channel.send('now playing CALL YOU ON DA FLIPPHONE')
                const connection = await message.member.voice.channel.join();
                const dispatcher = connection.play('KOCK_MUSIC/i.mp3')
                dispatcher.on('start', () => {
                    console.log('track 9 is playing');
                });

                dispatcher.on('finish', () => {
                    console.log('track 9 has finished playing');
                })

                dispatcher.on('error', console.error);
            }
        }
        else if (args[0] === '10') {
            if (message.member.voice.channel) {
                songId = 9
                message.channel.send('now playing FUCK OMAR')
                const connection = await message.member.voice.channel.join();
                const dispatcher = connection.play('KOCK_MUSIC/j.mp3')
                dispatcher.on('start', () => {
                    console.log('track 10 is playing');
                });

                dispatcher.on('finish', () => {
                    console.log('track 10 has finished playing');
                })

                dispatcher.on('error', console.error);
            }
        }


    } else if (command === 'avatar') {
        if (!message.mentions.users.size) {
            return message.channel.send(`Your avatar: <${message.author.displayAvatarURL({ format: "png", dynamic: true })}>`);
        }

        const avatarList = message.mentions.users.map(user => {
            return `${user.username}'s avatar: <${user.displayAvatarURL({ format: "png", dynamic: true })}>`;
        });
        message.channel.send(avatarList);


    } else if (message.member.hasPermission("ADMINISTRATOR") && command === 'purge') {
        const amount = parseInt(args[0]);

        if (isNaN(amount)) {
            return message.reply('that doesn\'t seem to be a valid number. the fuck?');
        } else if (amount < 2 || amount > 100) {
            return message.reply('you need to input a number between 2 and 100. smh my head');
        }

        message.channel.bulkDelete(amount, true).catch(err => {
            console.error(err);
            message.channel.send('sry these messages are TOO POWERFUL FOR KOLABOT')
        })
    }
});

client.login(token);
