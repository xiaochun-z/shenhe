import React, { FC, ChangeEvent, KeyboardEvent } from 'react';
import './TwentyFour.css'
import 'bootstrap'
import { useState } from 'react';
import logo from './tf24.jpg'

interface IAnswerEntity {
    Answer: string[]
}

const AnswerComponent: FC<IAnswerEntity> = (props) => {
    const listItem = props.Answer.map(a => <li key={a} className='list-group-item'>{a}</li>);
    return <ul className='list-group'>{listItem}</ul>
};

export const TwentyFour: FC = () => {
    const [strcards, setStrCards] = useState('2 4 5 10');
    const initAnswer: string[] = [];
    const [answer, setAnswer] = useState(initAnswer);
    const onTexFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStrCards(e.target.value);
    };

    const onTextFieldKeydown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.altKey === false && e.key === 'Enter') {
            showAnswer();
        }
    };
    const getcards = () => {
        var ncards = strcards.split(" ").filter(v => v.length > 0).map((v, i) => {
            return Number(v.trim());
        }).filter(n => Number.isNaN(n) === false);
        return ncards;
    };

    const verifycards = () => {
        var ncards = getcards();

        const canCalc = showPoint24(ncards);
        const nums: string = ncards.map((v, i) => v.toString()).reduce((v, c) => v + " " + c);
        const tip = canCalc ? "这些数字可以凑成24" : "无法将这些数据凑成24";
        const test: string[] = ["您输入的数字分别是：" + nums, tip];
        setAnswer(test);
    };
    const showAnswer = () => {
        var ncards = getcards();

        global_answer = [];
        const canCalc = showPoint24(ncards);
        if (canCalc === false) {
            setAnswer(["找不到答案"]);
        }
        else {
            const reversed = global_answer.reverse();
            setAnswer(reversed);
            global_answer = [];
        }
    };
    const clearAnswer = () => {
        setAnswer([]);
    };
    const showTips = () => {
        var ncards = getcards();

        global_answer = [];
        const canCalc = showPoint24(ncards);
        if (canCalc === false) {
            setAnswer(["找不到答案"]);
        }
        else {
            setAnswer([global_answer[0]]);
            global_answer = [];
        }
    };
    return (
        <div className='tfroot container mt-5'>
            <div className="card">
                <img src={logo} className="card-img-top card-24-logo" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">24 点</h5>
                    <p className="card-text">24点游戏（在香港也称“合廿四”）是一种使用扑克牌来进行的益智类游戏，游戏内容是：从一副扑克牌中抽去大小王，在剩下52张中任意抽取4张牌，把牌面上的数（A代表1）运用加、减、乘、除和括号进行运算得出24。每张牌都必须使用一次，但不能重复使用。在不同版本中，对J、Q、和K的处理有些差异。一个常见的版本是把J、Q、和K去除，或当成10；还有一个版本是把J表示11，Q表示12，K代表13。</p>
                    <p>有些组合有多种算法，例如2，4，6，Q四张牌可用 2 + 4 + 6 + 12 = 24 或 4×6 ÷ 2 + 12 = 24 或 12 ÷ 4×(6 + 2) = 24等来求解。也有些组合算不出24，如1、1、1、1 和 6、7、8、8等组合。</p>
                    <p>这个小程序可以作为24点游戏的辅助，帮助你快速找到你的牌能否达成24点。</p>
                    <label htmlFor="tfvalue" className="form-label">请输入牌（以空格分隔，例如：2 4 5 10)</label>
                    <input type="text" className="form-control mb-2" id="tfvalue" placeholder="2 4 5 10" value={strcards} onChange={onTexFieldChange} onKeyDown={onTextFieldKeydown} />
                    <button className='me-2 btn btn-sm btn-primary' onClick={verifycards}>查看是否能够凑成24</button>
                    <button className='me-2 btn btn-sm btn-info' onClick={showTips}>查看提示</button>
                    <button className='me-2 btn btn-sm btn-success' onClick={showAnswer}>查看答案</button>
                    <button className='btn btn-sm btn-secondary' onClick={clearAnswer}>清空答案</button>
                    <div className='answer'>
                        <AnswerComponent Answer={answer} />
                    </div>
                </div>
            </div>

        </div>
    );
};


const epsilon = 0.001;
var global_answer: string[] = [];

function generrateHow(a: number, op: string, b: number, num: number) {
    return a.toString() + op + b.toString() + "=" + num.toString()
}

function generatePossibleEntity(a: number, b: number) {
    let res: point24Entity[] = [
        { how: generrateHow(a, "+", b, a + b), num: a + b },
        { how: generrateHow(a, "×", b, a * b), num: a * b }];
    if (a >= b) {
        res.push({ how: generrateHow(a, "-", b, a - b), num: a - b });
    }
    else {
        res.push({ how: generrateHow(b, "-", a, b - a), num: b - a });
    }
    if (a !== 0) {
        res.push({ how: generrateHow(b, "÷", a, b / a), num: b / a });
    }
    if (b !== 0) {
        res.push({ how: generrateHow(a, "÷", b, a / b), num: a / b });
    }

    return res.filter((v, i) => Number.isInteger(v.num));
}

interface point24Entity {
    how: string,
    num: number
}
function showPoint24(cards: number[]) {
    if (cards.length === 1) {
        return Math.abs(cards[0] - 24) <= epsilon
    }

    for (let i = 0; i < cards.length; i++) {
        for (let j = i + 1; j < cards.length; j++) {
            // create new list with remaining numbers
            const newCards: number[] = [];
            for (let k = 0; k < cards.length; k++) {
                if (k !== i && k !== j) {
                    newCards.push(cards[k])
                }
            }

            // for any 2 numbers perform every operation
            let results = generatePossibleEntity(cards[i], cards[j]);

            for (let resIdx = 0; resIdx < results.length; ++resIdx) {
                // Push the new result in the list
                newCards.push(results[resIdx].num);

                // Check if using this new list we can obtain the result 24.
                if (showPoint24(newCards)) {
                    global_answer.push(results[resIdx].how);
                    return true;
                }

                // Backtrack: remove the result from the list.
                newCards.pop();
                global_answer.pop();
            }
        }
    }
    return false;
}