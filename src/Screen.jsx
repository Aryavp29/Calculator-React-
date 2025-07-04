const Screen = ({ text,setText }) => {
    return (
        <>
            <div className = "screen-container">
                <input id="screenid" type="text" className="screen" value={text}   onChange={(e) => setText(e.target.value)}/>
            </div>
        </>
    )
}
export default Screen