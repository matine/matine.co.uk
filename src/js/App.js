import React from 'react';
import Prismic from 'prismic-javascript';
import PrismicConfig from './prismic-configuration';
import Header from './components/Header';
import Footer from './components/Footer';
import Links from './pages/Links';

class App extends React.Component {

    state = {
        globalContent: null,
    }

    componentWillMount() {
        this.fetchGlobalContent();
    }

    /**
     * Fetch global content from Prismic and save to state.
     *
     * @return {void}
     */
    fetchGlobalContent() {
        Prismic.api(PrismicConfig.apiEndpoint).then(api => {
            api.query(Prismic.Predicates.at('document.type', 'global')).then(response => {
                if (response) {
                    this.setState({ globalContent: response.results[0] });
                }
            });
        });
    }

    /**
     * Renders the component.
     *
     * @return {XML}
     */
    render() {
        if (this.state.globalContent) {
            const globalContent = this.state.globalContent.data;

            return (
                <div>
                    <Header globalContent={globalContent} />
                    <Links globalContent={globalContent} />
                    <Footer globalContent={globalContent} />
                </div>
            );
        }
        return <h1>Loading...</h1>;
    }
}

export default App;
