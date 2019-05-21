import React from "react";

class Header extends React.Component {

    move() { 
        const title = document.querySelector(".tableSection__title");
        let topPosition = title.getBoundingClientRect().top;
        window.scrollTo(0,topPosition);
    }

    render() {
        return (
            <section className="header">
                <div className="header__logo">
                    <h1 className="logo">Currency Exchange</h1>
                </div>
                <nav className="header__nav">
                    <ul className="header__navList">
                        <li className="navList__element" onClick={this.move}>
                            Kursy Walut
                        </li>
                    </ul>
                </nav>
            </section>
        );
    }
}

export default Header;