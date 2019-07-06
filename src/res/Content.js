import React from 'react'
import  './Card.css'
import Card from './Card'
import cow from './Pictures/cow.png'
import hamster from './Pictures/hamster.png'
import mouse from './Pictures/mouse.png'
import panda from './Pictures/panda.png'
import pig from './Pictures/pig.png'
import rabbit from './Pictures/rabbit.png'
import Congrat from './Congrat'


// eslint-disable-next-line
var arr = [cow,hamster,mouse,panda,pig,rabbit,cow,hamster,mouse,panda,pig,rabbit];
let count = 0;
let log = "You won!";

function compareRandom(a, b) {
    return Math.random() - 0.5;
}




arr.sort(compareRandom);

class Content extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            flipped:false,
            firstCard:'',
        };
        this.handleClick = this.handleClick.bind(this);
        this.Change = this.Change.bind(this);
    }

    handleClick(event){
        let lockBoard = false;
        if (lockBoard) return;
        const elem = document.getElementById(event.target.id);
        let  cur;
        elem.classList.add('flip');
        let secondCard;
        if(!this.state.flipped){
            this.setState({
                flipped: true,
                firstCard:elem
            });
            return
        }
        if(elem === this.state.firstCard){
            return;
        }
        secondCard = elem;
        cur = this.state.firstCard;
        this.setState({
            flipped:false
        });
        if(cur.getAttribute('dataPic') === secondCard.getAttribute('dataPic')){
            cur.classList.add('event');
            secondCard.classList.add('event');
            count++;
            return;
        }
        lockBoard = true;
        setTimeout(() => {
            cur.classList.remove('flip');
            secondCard.classList.remove('flip');
            lockBoard = false;
        }, 500);
    }

    Change(){
        this.setState({
            flipped:false,
            el : arr.sort(compareRandom)
        });
       const a = document.getElementsByTagName('card');
       for(let i = 0; i<a.length;i++){
           a.item(i).classList.toggle('flip');
           a.item(i).classList.remove('event');
       }
       count = 0;
    }

    render() {
        let cardArr = [];
        for(let i = 0; i < 12; i++){
            let num = i+1;
            let inf;
            switch (arr[i]) {
                case cow:
                    inf = 'cow';
                    break;
                case hamster:
                    inf = 'hamster';
                    break;
                case mouse:
                    inf = 'mouse';
                    break;
                case panda:
                    inf = 'panda';
                    break;
                case pig:
                    inf = 'pig';
                    break;
                case rabbit:
                    inf = 'rabbit';
                    break;
                default:
            }
            cardArr.push(<Card  num={num}  onClick={this.handleClick} img={arr[i]} inf={inf}/>);
        }
        return(
            <div>
                <header id>Memoji</header>
                <cont>{cardArr}</cont>
                <Congrat onClick={this.Change} count={count} log={log}/>
            </div>

        )
    }
}


export default Content