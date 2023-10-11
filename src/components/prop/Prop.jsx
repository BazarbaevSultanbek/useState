import './prop.scss'
function Prop({back,func,color}) {
    return (
        <div className="container">
            <div className="prop">
                <div className="prop-modul" style={{
                    background:back
                }}>
                    <h2 style={{color:color}}>Hello</h2>
                    <p style={{color:color}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <input type="checkbox" id="check" onChange={func}/>
                    <label htmlFor="check" style={{color:color}}>Dark mode</label>
                </div>
            </div>
        </div>
    )
}
export default Prop;