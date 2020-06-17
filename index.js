const Discord = require('discord.js');
var { prefix, token } = require('./config.json');
const client = new Discord.Client();

var songRandom
const songs = [
    'KOCK_MUSIC/a.mp3', 'KOCK_MUSIC/b.mp3', 'KOCK_MUSIC/c.mp3', 'KOCK_MUSIC/d.mp3', 'KOCK_MUSIC/e.mp3', 'KOCK_MUSIC/f.mp3', 'KOCK_MUSIC/g.mp3', 'KOCK_MUSIC/h.mp3', 'KOCK_MUSIC/i.mp3', 'KOCK_MUSIC/j.mp3']

client.once('ready', () => {
    client.user.setActivity('kolabot help',{type: 'PLAYING'});
    console.log('Ready!');
});

client.on('message', async message => {
    var isReady = true;

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
        ~~Use nowplaying to see what KOCK song is playing.~~
        Use KOLASONG to play a KOCK song.
        \n***KOLA COMMANDS:***
        help - displays this menu
        server - displays server info
        user-info - displays user info (why the fuck do i need to put descriptions)
        avatar - display user avatar
        purge - bulk delete messages`)

        //KOLARADIO
    } else if (message.content === `${prefix}KOLARADIO`) {
        if (message.member.voice.channel) {
            function playSong() {
                const songId = Math.floor(Math.random() * songs.length);
                connection.play(songs[songId]).on("finish", playSong);
            }

            const connection = await message.member.voice.channel.join();
            playSong()
        } 


    } else if (message.content === `${prefix}disconnect`) {
        var voiceChannel = message.member.voice.channel;
        voiceChannel.leave();

    } else if (message.content === `${prefix}nowplaying`) {
        console.log(songRandom)
        if (songRandom === 1) {
            message.channel.send('Now playing THE KOCK CYPHER™.')
        } else if (songRandom === 2) {
            message.channel.send('Now playing HOES MAD.')
        } else if (songRandom === 3) {
            message.channel.send('Now playing SNOWS MAD.')
        } else if (songRandom === 4) {
            message.channel.send('Now playing JOES MAD.')
        } else if (songRandom === 5) {
            message.channel.send('Now playing KOCK DESTROYS RACISM')
        } else if (songRandom === 6) {
            message.channel.send('Now playing COOMER CHRISTMAS')
        } else if (songRandom === 7) {
            message.channel.send('Now playing GOODBYE JOE')
        } else if (songRandom === 8) {
            message.channel.send('Now playing DEEPTHROAT MY DEAGLE')
        } else if (songRandom === 9) {
            message.channel.send('Now playing CALL YOU ON DA FLIPPHONE')
        } else if (songRandom === 10) {
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
            return message.channel.send("These are the tracks KOLABOT can play.\n1. THE KOCK CYPHER™.\n2. HOES MAD.\n3. SNOWS MAD.\n4. JOES MAD.\n5. KOCK DESTROYS RACISM\n6. COOMER CHRISTMAS\n7. GOODBYE JOE\n8. DEEPTHROAT MY DEAGLE\n9. CALL YOU ON DA FLIPPHONE\n10. FUCK OMAR");
        }
        else if (args[0] === '1') {
            if (message.member.voice.channel) {
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


    } else if (command === 'purge') {
        const amount = parseInt(args[0]);

        if (isNaN(amount)) {
            return message.reply('that doesn\'t seem to be a valid number. the fuck?');
        } else if (amount < 2 || amount > 100) {
            return message.reply('you need to input a number between 2 and 100. smh my head');
        }

        message.channel.bulkDelete(amount, true).catch(err => {
            console.error(err);
            message.channel.send('sry these messages are TOO POWERFUL FOR KOLABOT')
        });
    }
});

client.login(token);
