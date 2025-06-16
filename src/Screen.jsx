const Screen = ({ text }) => {
    return (
        <>
            <div className = "screen-container">
                <input id="screenid" type="text" className="screen" value="0" readOnly />
            </div>
        </>
    )
}
export default Screen