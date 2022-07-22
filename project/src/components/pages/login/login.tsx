import {ThunkAppDispatch} from '../../../types/action';
import {AuthData} from '../../../types/auth-data';
import {loginAction} from '../../../store/api-actions';
import {connect, ConnectedProps} from 'react-redux';
import {FormEvent, useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import {AppRoute} from '../../../const/route';

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onSubmit(authData: AuthData) {
    dispatch(loginAction(authData));
  },
});

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function Login(props: PropsFromRedux): JSX.Element {
  const {onSubmit} = props;
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const navigate = useNavigate();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      onSubmit({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      });
    }
  };

  return (
    <section className="login">
      <div className="login__logo">
        <img src="img/melody-logo.png"
          alt="Угадай мелодию"
          width="186"
          height="83"
        />
      </div>
      <h2 className="login__title">Вы настоящий меломан!</h2>
      <p className="login__text">Хотите узнать свой результат? Представтесь!</p>
      <form
        className="login__form"
        action=""
        onSubmit={handleSubmit}
      >
        <p className="login__field">
          <label
            className="login__label"
            htmlFor="name"
          >Логин
          </label>
          <input
            ref={loginRef}
            className="login__input"
            type="text"
            name="name"
            id="name"
          />
        </p>
        <p className="login__field">
          <label
            className="login__label"
            htmlFor="password"
          >Пароль
          </label>
          <input
            ref={passwordRef}
            className="login__input"
            type="text"
            name="password"
            id="password"
          />
          <span className="login__error">Неверный пароль</span>
        </p>
        <button
          className="login__button button"
          type="submit"
        >Войти
        </button>
      </form>
      <button
        onClick={() => navigate(AppRoute.Game)}
        className="replay"
        type="button"
      >Сыграть ещё раз
      </button>
    </section>
  );
}

export {Login};
export default connector(Login);
