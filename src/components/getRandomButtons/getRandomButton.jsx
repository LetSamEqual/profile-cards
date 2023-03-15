import './getRandomButton.styles.css'

const GetRandomButton = ({onClickHandler}) => {
    return(
        <div className='randomBtnContainer' onClick={onClickHandler}>
        <h2>Get a random robot</h2>
        </div>
    )
}

export default GetRandomButton