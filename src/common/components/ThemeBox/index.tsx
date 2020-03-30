/**
 * @desc ThemeBox 主题box
 * @author pengdaokuan
 * @createDate  2020-03-28
 * @LastModify  2020-03-28
 */
import React from "react";
import styles from "./index.module.css";
import { getThemeList } from "../../utils";
import { useStoreTheme } from "../../hooks/useTheme";
import { AbstructThemeItemProps } from "../../../config-interface/index";
/**
 * ThemeBox 直连redux
 * @extends {React.Hooks}
 * @property {Function} callbackFunc - 回调函数
 */
export interface AbstractThemeBoxProps {
  onSelectTheme?: (theme: AbstructThemeItemProps) => void;
}

function ThemeBox({ onSelectTheme }: AbstractThemeBoxProps) {
  const list = getThemeList();
  const [theme] = useStoreTheme();
  return (
    <div className={styles.box}>
      {list &&
        [...list].map((t: AbstructThemeItemProps, index: number) => {
          return (
            <div
              key={index}
              style={{ backgroundColor: t.bgColor }}
              className={`${theme.uniqueKey === t.uniqueKey && "active"}`}
              onClick={() => {
                onSelectTheme && onSelectTheme(t);
              }}
            />
          );
        })}
    </div>
  );
}

export default ThemeBox;
