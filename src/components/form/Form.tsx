import './style_form.css'
import Send from '../../assets/send.svg'

function Form() {

    return (
        <div>
            <form>
                <textarea name="prompt" rows={1} cols={1} placeholder="Ask codex..."></textarea>
                <button type="submit"><img src={Send} alt="send" /></button>
            </form>
        </div>
    )
}

export default Form
