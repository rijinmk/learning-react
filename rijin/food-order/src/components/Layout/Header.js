import mealsImage from '../../assets/meals.jpeg'; 
import classes from './Header.module.css'; 
import HeaderCardButton from './HeaderCardButton';

const Header = props => {
    return (
        <>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCardButton onClick={props.onShowCart} />
            </header>

            <div className={classes["main-image"]}>
                <img src={mealsImage} />
            </div>
        </>
    ); 
}

export default Header; 