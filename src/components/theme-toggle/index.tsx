import React, { useCallback, useState, useEffect } from 'react';
import { Toggle } from 'rsuite';

import { useLocale } from '@/utils/hooks';
import { setTheme, Theme, getTheme, registerThemeChangeCb } from '@/utils/multi-theme';

export default () => {
  const { formatMessage } = useLocale();
  const [currTheme, setCurrTheme] = useState<Theme>(getTheme());
  useEffect(() => {
    const result = registerThemeChangeCb((theme: Theme) => {
      setCurrTheme(theme);
    });
    return () => {
      result && result();
    };
  }, [setCurrTheme]);

  const handleChange = useCallback((checked: boolean) => {
    const targetTheme = checked ? Theme.DARK : Theme.LIGHT;
    setTheme(targetTheme);
  }, []);

  return (
    <Toggle
      checked={currTheme === Theme.DARK}
      onChange={handleChange}
      checkedChildren={formatMessage('nightmode_on')}
      unCheckedChildren={formatMessage('nightmode_off')}
    />
  );
};
