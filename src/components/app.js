/**
 * Created by if_found_call_0586288454 on 13/07/2017 ap. J.-C..
 */
import React from 'react';
import {MuiThemeProvider} from 'material-ui/styles';
import CodeSection from './code';

export class App extends React.Component{
    render() {
        return (
            <MuiThemeProvider>
                <CodeSection />
            </MuiThemeProvider>
        )
    }
};


