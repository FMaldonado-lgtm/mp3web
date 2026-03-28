/*variabled that replaces these ids*/
const containerOfInformation = document.getElementById("InformationContainer")
const year = document.getElementById('yearl')
const flag = document.getElementById('imgInfo')
const info = document.getElementById('textInfo')
const yearAndSite = document.getElementById('yearAndSite')
const yearInfo = document.getElementById('yearInfo')

let currentPlayerIndex = 0;/*index for the players */
let currentTeamIndex = 0;/*index for the teams */

let verification = ''; /*a variable for verification */

/*array for the index and objects with information of each team */
let teams = ['Brazil', 'Germany', 'Italy', 'Argentina', 'France', 'Uruguay' ]
const InformationT = {
    Brazil: "Brazil is the most successful team in World Cup history, with five World Cup titles (1958, 1962, 1970, 1994, and 2002). Known for their flair, technical skill, and attacking play, Brazil has produced some of the greatest footballers in history, such as Pelé, Ronaldo, and Ronaldinho. Their iconic yellow and green uniforms and samba-style football have made them one of the most beloved teams in the tournament.",
    Germany: "Germany is a powerhouse in World Cup football, with four titles (1954, 1974, 1990, and 2014). The team is known for its efficiency, disciplined play, and resilience. Germany has consistently been a top contender in international football, producing legendary players like Franz Beckenbauer, Miroslav Klose, and Lothar Matthäus. Their ability to perform under pressure has earned them respect globally.",
    Italy: "Italy is another giant in World Cup history, with four titles (1934, 1938, 1982, and 2006). Known for their strong defensive tactics and tactical discipline, Italy has produced iconic players such as Roberto Baggio, Paolo Maldini, and Giuseppe Meazza. Their ability to adapt to different styles of play and remain competitive in every tournament has solidified their legacy.",
    Argentina: "Argentina has won the World Cup three times, in 1978, 1986, and 2022. The team is known for its passionate play and has produced legendary talents such as Diego Maradona, who led Argentina to their 1986 victory, and Lionel Messi, who captained the team to glory in 2022. Argentina's footballing culture is rich, with a strong focus on creativity and flair. Their triumph in 2022 cemented their status as one of football’s greatest nations, with an unforgettable final against France that went to penalties.",
    France: "France has won the World Cup twice, in 1998 and 2018, and is known for its blend of technical ability and athleticism. The French team has produced some of the best players in football history, including Zinedine Zidane, Michel Platini, and Thierry Henry. France has been a consistent contender in international tournaments and is known for its balanced approach, excelling in both defense and attack.",
    Uruguay: 'Uruguay has won the World Cup twice, in 1930 and 1950. They were the first-ever World Cup champions, winning the inaugural tournament as hosts in 1930. Their second triumph in 1950 is remembered for the legendary "Maracanazo," where they shocked Brazil in the final at the Maracanã Stadium. Despite being a small nation, Uruguay has a rich footballing history, known for its "garra charrúa" spirit—symbolizing determination and resilience on the field.',
}

const TeamsSrc = {
    Brazil: "/Images/Brazil.png",
    Germany: "/Images/Germany.png",
    Italy: "/Images/Italy.png",
    Argentina: "/Images/Argentina.png",
    France: "/Images/France.png",
    Uruguay: "/Images/Uruguay.png",

}

/*array for the index and objects for the information of each player */
let players = ['Klose', 'Pele', 'Maradona', 'Nazario', 'Zidane']

const InformationP = {
    Klose: "Klose is the top scorer in World Cup history with 16 goals in 4 tournaments (2002, 2006, 2010, 2014). He broke Ronaldo Nazário's record in 2014. Klose became a World Cup champion with Germany in 2014, with notable performances in 2002 and 2006, where he scored 5 goals in each tournament.",
    Pele: "The legendary Pelé participated in 4 World Cups (1958, 1962, 1966, 1970), winning 3 of them (1958, 1962, 1970), being the only player with this achievement. He scored a total of 12 goals and shone particularly in 1958 when, at just 17, he scored twice in the final. In 1970, he led one of the most memorable teams in football history.",
    Maradona: 'Maradona played in 4 World Cups (1982, 1986, 1990, 1994), scoring a total of 8 goals. He won the World Cup once, in 1986, where he led Argentina to the title. That year, he delivered historic moments such as the "Hand of God" and the "Goal of the Century" against England in the quarterfinals. He also reached the final in 1990 but lost to West Germany.',
    Nazario: "Ronaldo played in 4 World Cups (1994, 1998, 2002, 2006) and is the second-highest scorer in World Cup history with 15 goals. He was a champion in 1994 (although he did not play) and 2002. In the 2002 tournament, he stood out with 8 goals, including 2 in the final against Germany, playing a key role in Brazil's fifth title.",
    Zidane: "Zidane played in 3 World Cups (1998, 2002, 2006) and scored 5 goals. He was instrumental in leading France to its first title in 1998, scoring twice in the final against Brazil. In 2006, he guided his team to the final against Italy, but was sent off after headbutting Marco Materazzi.",
}

const PlayersSrc = {
    Klose: '/Images/Klose.png',
    Pele: "/Images/Pele.png",
    Maradona: "/Images/Maradona.png",
    Nazario: "/Images/Nazario.png",
    Zidane: "/Images/Zidane.png",
}

/*objects for the information of each year */
const years = {
    1930: '1930 - Uruguay',
    1934: '1934 - Italy',
    1938: '1938 - France',
    1950: '1950 - Brazil',
    1954: '1954 - Switzerland',
    1958: '1958 - Sweden',
    1962: '1962 - Chile',
    1966: '1966 - England',
    1970: '1970 - Mexico',
    1974: '1974 - West Germany',
    1978: '1978 - Argentina',
    1982: '1982 - Spain',
    1986: '1986 - Mexico',
    1990: '1990 - Italy',
    1994: '1994 - United States',
    1998: '1998 - France',
    2002: '2002 - South Korea and Japan',
    2006: '2006 - Germany',
    2010: '2010 - South Africa',
    2014: '2014 - Brazil',
    2018: '2018 - Russia',
    2022: '2022 - Qatar',
}

const winners = {
    1930: 'The first FIFA World Cup was held, and Uruguay emerged as the winners. In a dramatic final, they defeated Argentina 4-2 to claim the inaugural title. This historic tournament marked the beginning of what would become the most prestigious competition in world football.',
    1934: 'Italy hosted the second World Cup and made history by winning their first title. They defeated Czechoslovakia 2-1 after extra time in the final, showcasing their strength and setting the tone for future competitions.',
    1938: 'Italy successfully defended their title in 1938, defeating Hungary 4-2 in a thrilling final. This victory solidified Italy as a dominant force in international football, and the tournament itself was marked by high-quality matches and fierce competition.', 
    1950: 'Uruguay, in a stunning upset, won their second World Cup in 1950. In the final match, known as the Maracanazo, they defeated Brazil 2-1 in front of a massive crowd at the Maracanã stadium, one of the biggest shocks in World Cup history.',
    1954: 'West Germany claimed their first World Cup in 1954, defeating Hungary 3-2 in a dramatic final often referred to as the "Miracle of Bern." This tournament is remembered for its fast-paced games and for West Germany’s unexpected triumph over the favored Hungarian team.',
    1958: 'Brazil, led by a young Pelé, won their first World Cup in 1958, defeating Sweden 5-2 in the final. Pelé’s brilliance was on full display, and his performance marked the start of Brazil’s domination of the World Cup stage in the coming decades.',
    1962: 'Brazil successfully defended their title in 1962, overcoming Czechoslovakia 3-1 in the final. Despite Pelé’s injury early in the tournament, Brazil’s collective strength and skill led them to another victory, cementing their reputation as one of the world’s best footballing nations.',
    1966: 'England won their only World Cup in 1966, defeating West Germany 4-2 after extra time. This tournament is notable for England’s historic victory, which was made all the more special by their performance in front of their home crowd.',
    1970: 'Brazil won their third World Cup in 1970, solidifying their dominance in world football. They defeated Italy 4-1 in a final that showcased their attacking brilliance and teamwork, with players like Pelé, Jairzinho, and Tostão delivering unforgettable performances.',
    1974: 'West Germany won their first World Cup as hosts in 1974, defeating the Netherlands 2-1 in the final. The tournament is remembered for the tactical innovations introduced by the Dutch “Total Football” style, which influenced football for years to come.',
    1978: 'Argentina claimed their first World Cup in 1978, defeating the Netherlands 3-1 after extra time in the final. The tournament was marked by emotional and intense moments, with Argentina triumphing as hosts, giving the nation a long-awaited victory on home soil.',
    1982: 'Italy won their third World Cup in 1982, defeating West Germany 3-1 in the final. The tournament is remembered for Italy’s solid defense and strategic play, with Paolo Rossi’s standout performances leading them to victory.',
    1986: 'Argentina, led by Diego Maradona, won the 1986 World Cup, defeating West Germany 3-2 in a thrilling final. Maradona’s performances, including the famous “Hand of God” goal and his stunning solo effort against England, are among the most iconic moments in World Cup history.',
    1990: 'West Germany won their third World Cup in 1990, defeating Argentina 1-0 in a tense final. This tournament is often remembered for its low-scoring, defensive nature, but West Germany’s resilience and determination in the final earned them the trophy.',
    1994: 'Brazil claimed their fourth World Cup in 1994, defeating Italy in a penalty shootout after a goalless draw in the final. The tournament featured a new level of tactical discipline and marked the emergence of Brazil’s most successful generation of footballers.',
    1998: 'France won their first World Cup in 1998, defeating Brazil 3-0 in a dominant final performance. The tournament was a breakthrough for French football, with Zinedine Zidane’s two goals in the final sealing France’s victory on home soil.',
    2002: 'Brazil claimed their fifth World Cup in 2002, defeating Germany 2-0 in the final. This tournament is remembered for Brazil’s attacking prowess, with Ronaldo’s two goals in the final helping secure their victory and cement his place as one of football’s greatest players.',
    2006: 'Italy won their fourth World Cup in 2006, defeating France in a penalty shootout after a 1-1 draw in the final. The tournament was marked by strong defensive play, and Italy’s win was earned through grit and determination, with Fabio Grosso scoring the winning penalty.',
    2010: 'Spain won their first World Cup in 2010, defeating the Netherlands 1-0 in extra time. The tournament was a celebration of Spain’s possession-based “tiki-taka” style, with Andrés Iniesta scoring the winning goal in the final to give Spain their long-awaited victory.',
    2014: 'Germany won their fourth World Cup in 2014, defeating Argentina 1-0 after extra time in the final. The tournament is remembered for Germany’s attacking dominance and for Mario Götze’s dramatic extra-time goal that secured the win.',
    2018: 'France claimed their second World Cup in 2018, defeating Croatia 4-2 in a high-scoring final. The tournament was marked by France’s dynamic and youthful team, with Kylian Mbappé emerging as one of the standout stars of the competition.',
    2022: 'Argentina, led by Lionel Messi, won their third World Cup in 2022, defeating France in a dramatic penalty shootout after a 3-3 draw in the final. The tournament is remembered for its incredible final match, where both teams played with remarkable intensity and skill, with Messi’s leadership guiding Argentina to victory.'

}

/******************************************************* Code for the information of the pop up ****************************************************************************************/

/*This functions is executed with the onclick attribute wich give us a value*/
function getInformation(value) {
    /*if the value is in the object of teams, that means it is a country instead of a player */
    if (teams.includes(value)) {
        let team = value; /*we create a variable team and we give it the value of the country selected */
        verification = 'teamindex' /*we are setting that the index have to be of teams */
        containerOfInformation.classList.add('visible') /*this add the class of visible to the container so it will be visible */
        currentTeamIndex = teams.indexOf(team); /*the current team index takes the vlaue of the country selected of the array */
        info.textContent =InformationT[team] /*reaplce the text for the information*/
        flag.src = TeamsSrc[team] /*give the source of the image selected */

    /*all the same process but for players */
    } else if (players.includes(value)) {

        let player = value;
        verification = 'playerindex'
        containerOfInformation.classList.add('visible')
        currentPlayerIndex = players.indexOf(player);
        info.textContent = InformationP[player]
        flag.src = PlayersSrc[player]
    
    /*in case of an error */
    } else {
        alert('There is something wrong')
    }

/************************************************************* Code for the pop up *************************************************************************************/

}
/*I wrote an if statement in case we are in a different page in wich this id doesnt exist, so the code will still running fine */
if (containerOfInformation){
    /*when we click outtside the container, it will remove the class of visible, so it will make the container invisible again */
    containerOfInformation.addEventListener('click', (event) => {
        if (event.target === containerOfInformation){
        containerOfInformation.classList.remove('visible');
        }
    });
}

/************************************************************ Code for the buttons ******************************************************************************/

/*a function for the button  next */
function next() {
    /*depending if the verification is for a player or a country it will run a different code */
    switch (verification) {
        case 'teamindex' :
            currentTeamIndex = (currentTeamIndex + 1) % teams.length; /*the current index of the array will increase */
            getInformation(teams[currentTeamIndex]) /*then it will look for the element with the new index in the array, and then with the new country we will execute the function with a new value, so it will bring us the information of the other team */
            break
        case 'playerindex' :
            /*same process but for the players */
            currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
            getInformation(players[currentPlayerIndex])
    }
}


/*this function have the same process but instead of increase the index, it will decrease the index */
function last() {
    switch (verification) {
        case 'teamindex' :
            currentTeamIndex = (currentTeamIndex - 1 + teams.length) % teams.length;
            getInformation(teams[currentTeamIndex])
        break

        case 'playerindex' :
            currentPlayerIndex = (currentPlayerIndex - 1 + players.length) % players.length;
            getInformation(players[currentPlayerIndex])
        break
    }
}

/************************************************** Code for the search part ***********************************************************************/

/*I wrote an if statement in case we are in a different page in wich this id doesnt exist, so the code will still running fine */
if (year) {
    /*an event listener that executes a code when we click on a option of the select element */
    year.addEventListener('change', function () {
        let yearSelected = this.value; /*this variable wil take the value given */
        switch(yearSelected) {
            /*this switch statement will give us information depending on what value we got  */
            case '1930' :
                yearAndSite.textContent = years[1930];
                yearInfo.textContent = winners[1930];
                break
            case '1934' :
                yearAndSite.textContent = years[1934];
                yearInfo.textContent = winners[1934];
                break
            case '1938' :
                yearAndSite.textContent = years[1938];
                yearInfo.textContent = winners[1938];
                break
            case '1950' :
                yearAndSite.textContent = years[1950];
                yearInfo.textContent = winners[1950];
                break
            case '1954' :
                yearAndSite.textContent = years[1954];
                yearInfo.textContent = winners[1954];
                break
            case '1958' :
                yearAndSite.textContent = years[1958];
                yearInfo.textContent = winners[1958];
                break
            case '1962' :
                yearAndSite.textContent = years[1962];
                yearInfo.textContent = winners[1962];
                break
            case '1966' :
                yearAndSite.textContent = years[1966];
                yearInfo.textContent = winners[1966];
                break
            case '1970' :
                yearAndSite.textContent = years[1970];
                yearInfo.textContent = winners[1970];
                break
            case '1974' :
                yearAndSite.textContent = years[1974];
                yearInfo.textContent = winners[1974];
                break
            case '1978' :
                yearAndSite.textContent = years[1978];
                yearInfo.textContent = winners[1978];
                break
            case '1982' :
                yearAndSite.textContent = years[1982];
                yearInfo.textContent = winners[1982];
                break
            case '1986' :
                yearAndSite.textContent = years[1986];
                yearInfo.textContent = winners[1986];
                break
            case '1990' :
                yearAndSite.textContent = years[1990];
                yearInfo.textContent = winners[1990];
                break
            case '1994' :
                yearAndSite.textContent = years[1994];
                yearInfo.textContent = winners[1994];
                break
            case '1998' :
                yearAndSite.textContent = years[1998];
                yearInfo.textContent = winners[1998];
                break
            case '2002' :
                yearAndSite.textContent = years[2002];
                yearInfo.textContent = winners[2002];
                break
            case '2006' :
                yearAndSite.textContent = years[2006];
                yearInfo.textContent = winners[2006];
                break
            case '2010' :
                yearAndSite.textContent = years[2010];
                yearInfo.textContent = winners[2010];
                break
            case '2014' :
                yearAndSite.textContent = years[2014];
                yearInfo.textContent = winners[2014];
                break
            case '2018' :
                yearAndSite.textContent = years[2018];
                yearInfo.textContent = winners[2018];
                break
            case '2022' :
                yearAndSite.textContent = years[2022];
                yearInfo.textContent = winners[2022];
                break
                
        }
        
        
        
    })
}