import React from 'react';
import Prismic from 'prismic-javascript';
import PrismicConfig from './prismic-configuration';
import Header from './components/Header';
import Footer from './components/Footer';
import Routing from './Routing';

class App extends React.Component {

    state = {
        workContent: null,
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
        const globalContent = this.state.globalContent;

        if (!globalContent) {
            return <h1>Loading...</h1>;
        }

        return (
            <div>
                <Header globalContent={ globalContent.data } />
                <Routing globalContent={ globalContent.data } />
                <Footer globalContent={ globalContent.data } />
            </div>
        );
    }
}

export default App;
