import {useState} from "react";
import {IntlProvider} from "react-intl";
import Enlish from "./Languages/English.json";
import French from "./Languages/French.json";

const Context = React.createContext();
const local = navigator.language;

let lang;
if (local === "English"){
    lang = Enlish;
}else {
    lang = French;
}


const Wrapper = (props) => {
    const [locale, setLocale] = useState(local);
    const [messages, setMessages] = useState(lang)

    function selectLang(e){
        const newLocale = e.targetRanges.value
        setLocale(newLocale)
        if (newLocale === "French"){
            setMessages(French)
        }else {
            setMessages(Enlish)
        }
    }

    return (
        <Context.Provider value={locale, selectLang}>
            <IntlProvider messages={messages} locale={locale}>
                {this.props.children}
            </IntlProvider>
        </Context.Provider>

    )
}

export default Wrapper;