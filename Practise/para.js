const text=[
    `The Mughal Empire reached its greatest extent in the time of Aurangzeb Alamgir,
    but it collapsed with dramatic suddenness within a few decades after his death.
    The Mughal Empire owes its decline and ultimate downfall to a combination of factors; 
    firstly Aurangzeb’s religious policy is regarded as a cause for the decline of the Mughal Empire 
    as it led to disunity among the INDIAN people.
    `,
    ` Another reason was unworthy and incompetent successors of Aurangzeb.
    The character of Mughal kings had deteriorated over a period of time.
    The successive rulers after Aurangzeb were weak and lacked the character, 
    motivation and commitment to rule the empire strongly. They had become ease loving and cowardly. 
    They totally disregarded their state duties and were unable to detain the declining empire from its fall. 
    These later Mughal rulers were absolutely incompetent and weak. 
    `,
    ` They were proven neither good generals nor good statesmen who could control or 
    administer the large empire which covered nearly the whole of the subcontinent during Aurangzeb’s rule.
    The later rulers were also pleasure loving and were renowned for living an extravagant 
    lifestyle with little thought to the effect it had on the economy of the empire.
    They also lacked courage, determination and training.
    Money was spent lavishly on fine buildings, jewellery, fine clothes and food.
    No infrastructure was created for the improvement of administration, industry or agriculture.
    `,
    `Local and foreign Invasions on Delhi also made the Mughals weak.
    Marathas were the major opponents of Mughals. They were from central and south India.
    Aurangzeb fought with them but could not control them. Until 1750,
    they had become a major threat for the Mughals. However,
    Marathas were defeated in 1761 in the battle of Panipat and powerless Mughals got some more time to rule India.
    Besides Marathas, two more invasions took place from Afghanistan and Persia.
    In 1738, Persian General Nadir shah invaded Delhi and looted their wealth.
    Between 1747 and 1769, Afghan General Ahmed Shah invaded India ten
    `,
    `The degeneration of the rulers had also led to the moral degeneration of the nobility.
    Under the early Mughals, the nobles performed useful functions and
    distinguished themselves both in war and peace.
    But the elite under the later Mughals was more interested in worldly pursuit and self-enhancement.
    The nobles who had once been talented men with integrity, honesty, and loyalty,
    turned selfish and deceitful. Growth of hostile and rival clique in the court also undermined
    the strength of the government. Widespread corruption in the administration started and
    taking bribes became common.
    `,
    `One of the most potent causes of the fall of the Mughal Empire was the deterioration and
    demoralization of the army. The military had not only become inefficient but also lacked in training,
    discipline and cohesion. The army was out-dated in regard to equipment.
    It consisted of contingents maintained by various nobles, which was the main source of Army’s weakness.
    As the weakening of the nobles occurred, so did the army.
    This was because of the soldiers, instead of identifying and uniting as Mughal Indians,
    identified themselves with different ethnic groups like Persian, Afghans and Central Asians.
    `,
    `Another factor contributing to the decline was the financial position of the Mughals,
    which had become deplorable. The war of successions, rebellions and luxurious style of living had 
    depleted the once enormous treasury and had led to financial bankruptcy.
    During the time of Aurangzeb, the Mughal Empire had expanded to reach its maximum size.
    This vast area had become impossible for one ruler to control and govern from one centre.
    It was during the later Mughals that Deccan, Bengal, Bihar and Orissa declared their independence.
    `,
    `Mughal Empire was in serious decline from 18th  century.
    And from the region of Jehangir EIC wanted to take advantage of wealth gained by trade in India.
    EIC was Private Trading Company, but behind it was the most powerful country.
    It was the first to go through Industrial Revolutions. EIC, were able to afford army Mughals cannot defeat.
    So, decline and the strength of British meant fall of mightiest Mughal Empire.
    `,
    `The French encouraged the Nawab of Bengal to attack the EIC base at Calcutta.
    Furthermore the Fortification of British post on Calcutta was also against agreement 
    with the Nawab of Bengal and so Siraj-ud-Daulah marched over Calcutta and seized
    Fort William and locked the British residents in a small room.
    23 out of 65 people died and so Battle of Plessey began.
    Robert Clive succeeded in defeating Siraj-ud-Daullah by bribing one of his key men Mir Jafar.
    Jafar was made the new Nawab of Bengal as reward and Bengal came under EIC’s rule.
    Robert Clive was given Kashmir as reward.
    `,
    `The British pride was hurt by the invasion in Afghanistan and decided to attack on Sindh
    under Sir Charles Napier to restore their Pride and Prestige among Muslims
    and to capture the important Route through Bolan pass.
    Also they wanted to make sure it is not the target of Sikhs expansion.
    Even in Britain many people condemned Napier’s action for they had broken
    a friendship treaty with the Amirs of Sindh in 1809.
    Sir Charles Napier provoked Amirs of Sindh to attack British.
    Now they had a reason to make it the base of annexation.
    `]

    function shuffle(array) {
        let currentIndex = array.length,
            randomIndex;
    
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
    
            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
    
            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]
            ];
        }
    
        return array;
    }
    
    const item = document.querySelector("#items")
    const dataContainer = document.querySelector("#data")
    const generate = () => {
        if (isNaN(item.value) || item.value < 0 || item.value > 9) {
            const randomIndex = Math.floor(Math.random() * text.length)
            dataContainer.innerHTML = `<p> ${text[randomIndex]} </p>`
        } else {
            const localText = shuffle(text);
            const data = localText.slice(0, item.value)
            const parars = data.map(
                (d) => {
                    return `<p> ${d} </p>`
                }
            )
            console.log(parars)
            console.log(parars.join(""))
            dataContainer.innerHTML = parars.join("");
            // array to string
        }
    }