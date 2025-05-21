import { useState } from 'react';
import styles from './PopoverPage.module.css';
import Popover from '#src/components/Popover';
import { Button } from '#src/components/Button';

export const Page: React.FC = () => {
  const [element1, setElement1] = useState<HTMLElement | null>(null);
  const [element2, setElement2] = useState<HTMLElement | null>(null);
  const [isDrop1Open, setDrop1Open] = useState<boolean>(false);
  const [isDrop2Open, setDrop2Open] = useState<boolean>(false);
  return (
    <div className={styles.pageContainer}>
      <Button innerRef={(elem) => setElement1(elem)} onClick={() => setDrop1Open((isDropOpen) => !isDropOpen)}>
        Открыть
      </Button>

      <Button innerRef={(elem) => setElement2(elem)} onClick={() => setDrop2Open((isDropOpen) => !isDropOpen)}>
        Открыть
      </Button>

      {!isDrop1Open ? null : (
        <Popover
          className={styles.dropdown}
          data-testid="my-drop"
          targetElement={element1}
          onClickOutside={() => setDrop1Open(false)}
        >
          <span>Рopover выровнен по умолчанию (по левому краю внизу)</span>
        </Popover>
      )}

      {!isDrop2Open ? null : (
        <Popover
          data-testid="my-drop"
          position={'bottom-right'}
          targetElement={element2}
          onClickOutside={() => setDrop2Open(false)}
          style={{
            padding: '12px 16px',
            borderRadius: '8px',
            boxShadow: '0 6px 18px rgba(0, 0, 0, 0.2)',
            background: 'white',
            margin: 0,
            border: 'none',
          }}
        >
          <span>Рopover выровнен по правому краю и не выходит за границы фрейма</span>
        </Popover>
      )}
    </div>
  );
};
