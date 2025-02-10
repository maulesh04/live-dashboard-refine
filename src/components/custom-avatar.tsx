import { getNameInitials } from "@/utilities";
import { Avatar as AntDAvatar, AvatarProps } from "antd"

type Props = AvatarProps & {
    name?: string;
}

const CustomAvatar = ({name, style, ...rest}: Props) => {
  return (
    <AntDAvatar
        alt={name}
        size="small"
        style={{
            backgroundColor: '#87d068',
            display: 'flex',
            alignItems: 'center',
            border: 'none',
            ...style
         }}
         {...rest}
    >
        {getNameInitials(name || '')}
    </AntDAvatar>
  )
}

export default CustomAvatar