import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "~/components/AccountsItem/AccountItem.module.scss";

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/93b5f5b68b8538c7c17a4a83384d1f0a.jpeg?x-expires=1659841200&x-signature=FzGyAXm11dpuomvKYXcgS0CCq4I%3D" alt="Hoaa" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;