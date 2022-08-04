import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    return (
        <Button to={data.to} className={cx('menu-item')} leftIcon={data.icon} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
