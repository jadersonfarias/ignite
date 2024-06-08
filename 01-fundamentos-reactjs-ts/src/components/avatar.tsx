import { ImgHTMLAttributes } from 'react'
import styles from "./Avatar.module.css"

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
 // src: string;
 // alt?: string;
}

export function Avatar({ hasBorder = true, ...props }: AvatarProps) { //usando o ...props eu não preciso colocar src, alt porque ele já entende que o props pode ser tudo o que já existe no html
  return (
    <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} {...props}/>
    //src={src} />

  );
}
