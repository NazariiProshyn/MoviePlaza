import React, { Component } from 'react';
import './filter.css';
import search_img from './../../images/search.png';
import films from '../../staticStorage/allfilm';
class Filter extends Component {
    filtring() {
        const genre = document.getElementById('selGenre').value;

        console.log(genre);
        const start_rate = document.getElementById('startrate').value;
        const end_rate = document.getElementById('endrate').value;
        let x = document.getElementsByClassName('film-item');
        for (let i = 0; i < x.length; i++) {
            let temp = films.find((film) => film.id === x[i].id);
            if (temp.rate < start_rate || temp.rate > end_rate) {
                x[i].style.display = 'none';
            } else {
                x[i].style.display = 'grid';
            }
        }
    }
    test() {
        console.log('search');
    }
    render() {
        return (
            <div className="Container">
                <p>Каталог фільмів</p>
                <div className="searchblock">
                    <input
                        id="filmsearch"
                        type="search"
                        placeholder="Пошук фільму"
                    ></input>
                    {/*добавити onclick для img або замінити img на button i знайти спосіб як поставити на фон кнопки картинку */}
                    <img
                        src={search_img}
                        alt="search"
                        id="searchImg"
                        onClick={this.test}
                    ></img>
                </div>
                <p>Фільтр:</p>
                <div className="filter">
                    <select id="selGenre">
                        <option>Жанр</option>
                        <option value="Комедія">Комедія</option>
                        <option value="Триллер">Триллер</option>
                        <option value="Драма">Драма</option>
                    </select>
                    <div className="selyear">
                        <p>Рік:</p>
                        <input id="startyear" placeholder="від"></input>
                        <input id="startyear" placeholder="до"></input>
                    </div>
                    <div className="sellen">
                        <p>Довжина:</p>
                        <input id="startlen" placeholder="від"></input>
                        <input id="endlen" placeholder="до"></input>
                    </div>
                    <div className="selprice">
                        <p>Ціна:</p>
                        <input id="startprice" placeholder="від"></input>
                        <input id="endprice" placeholder="до"></input>
                    </div>
                    <div className="selrate">
                        <p>Рейтинг</p>
                        <input id="startrate" placeholder="від"></input>
                        <input id="endrate" placeholder="до"></input>
                    </div>
                    <button onClick={this.filtring} className="filtbutton">
                        Застосувати
                    </button>
                </div>
            </div>
        );
    }
}

export default Filter;
