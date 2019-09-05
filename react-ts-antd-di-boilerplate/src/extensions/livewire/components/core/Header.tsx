import { withRouter } from 'react-router-dom';
import { Header as DefaultHeader } from '@default/components/core/Header';

export class Header extends DefaultHeader {

    getTitle() : string {
        return 'Livewire Application';
    }

}

export default withRouter(Header);