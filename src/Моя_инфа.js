Flux система(круговая)
Component -> CreateAction -> Dispatch -> Reducer -> Component и так по кругу.
Допустим еть компонент-кнопка, при клике на неё будем создавать 'Action'(действие), после
будем вызывать функцию 'Dispatch' эта функция является частью нашего хранилища 'Store', и
в неё будеи передавать наш 'Action'. В ответ на это запустится 'Reducer' и отреагирует на
наш экшен. 'Reducer' принимает на вход текущее состояние и 'Action', а на выход отдаёт уже
новое состояние которое записывается в 'Store'. Далее данные в 'Store' поменяются и произой-
дёт перерисовка нашего компонента.