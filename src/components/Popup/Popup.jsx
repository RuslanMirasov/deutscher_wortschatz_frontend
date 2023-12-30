import ReactDOM from 'react-dom';
import { Title, Text } from 'components/Typography';
import { Button, ButtonsList, CloseButton } from 'components/Buttons';
import { usePopup } from 'contexts/PopupContext';
import './Popup.scss';

const Popup = () => {
  const { isOpenPopup, popupType, popupTitle, popupText, popupClose, popupOpen } = usePopup();

  const popupContentClasses = {
    'popup-content': true,
    'type-login': popupType === 'login',
    'type-registration': popupType === 'registration',
    'type-request': popupType === 'request',
    'type-callback': popupType === 'callback',
    'type-error': popupType === 'error',
    'type-confirm': popupType === 'confirm',
  };

  const currentPopupContentClasses = Object.keys(popupContentClasses)
    .filter(key => popupContentClasses[key])
    .join(' ');

  return ReactDOM.createPortal(
    <>
      {isOpenPopup && (
        <div className="popup" onClick={popupClose}>
          <div className={currentPopupContentClasses} onClick={e => e.stopPropagation()}>
            <CloseButton onClick={popupClose} />

            {popupTitle && <Title>{popupTitle}</Title>}
            {popupText && <Text size="big">{popupText}</Text>}

            <ButtonsList align="center">
              <Button
                onClick={() =>
                  popupOpen(
                    'request',
                    'Request',
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, minima dolores. Voluptatibus labore voluptate laboriosam consectetur sapiente inventore. Dicta tempore sunt, cum blanditiis quam eligendi quo fuga corporis ullam quasi.Laudantium, odit hic dolorum, repellendus distinctio vel eaque quaerat velit maiores sapiente ipsa earum enim doloremque nulla incidunt accusantium, cumque tenetur odio reprehenderit porro corrupti impedit! Deleniti quod expedita aut?Aperiam libero ad magnam accusantium provident saepe assumenda quos. Expedita obcaecati quisquam, voluptate qui neque incidunt architecto quia pariatur, impedit dolore laboriosam enim quas exercitationem! Atque provident consectetur enim cum?Sint veritatis nesciunt sed esse quibusdam maxime, accusantium, ipsum quos autem, vero facilis eaque deleniti perspiciatis quasi unde cum. Esse aut quae perferendis sed iure alias asperiores nam eum inventore.Dolores sequi numquam assumenda itaque cupiditate ut aperiam porro quasi voluptates tempora nobis amet earum, asperiores nihil impedit quo quis quos ullam illo eius ex? Culpa sunt suscipit porro a.Repellendus unde voluptatum eius possimus impedit, sint ab magni atque fugit tempore omnis, doloremque ipsam modi recusandae quaerat explicabo maxime amet fuga tenetur blanditiis. Recusandae repellat ea ex at voluptate.Nihil incidunt, voluptatibus unde minima veniam suscipit quas assumenda hic! Doloribus rem quae distinctio, fuga dicta magni quod ut sunt nemo rerum laborum, vel quas nesciunt laboriosam eaque illo eius.Ducimus sit quo, mollitia ipsa tempora fugiat distinctio quas id, veritatis necessitatibus odit suscipit placeat cum autem ratione molestiae obcaecati blanditiis, magnam quae soluta nulla deleniti repudiandae sunt? Odio, reiciendis.Velit sint voluptates ipsa ex nobis incidunt, esse explicabo fugit magnam corporis? Voluptates quos voluptate, nihil, commodi repudiandae tempore odio inventore ut aliquid, ipsa cum. Adipisci deserunt vel veritatis vero!Obcaecati quos ut porro molestias similique autem assumenda hic cumque, tenetur quisquam pariatur voluptas eaque, accusantium eius ipsa eum minima voluptate corrupti repellat ea minus quibusdam? Nihil ducimus minus dolorum.'
                  )
                }
                variant="black"
              >
                REQUEST
              </Button>
            </ButtonsList>
          </div>
        </div>
      )}
    </>,
    document.body
  );
};

export default Popup;
