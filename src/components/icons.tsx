import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

interface IconProps extends SvgProps {
  size?: number;
  color?: string;
}

export function DirectionUpRight({
  size = 24,
  color = "#000",
  ...props
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        strokeWidth="1.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.6971 12.695 4.4256 11.7854c-0.4215-0.118-0.7949-0.3664-1.0667-0.7095-0.2718-0.3431-0.4281-0.7635-0.4466-1.2009-0.0184-0.4373 0.1019-0.8693 0.3439-1.2341 0.2419-0.3648 0.5931-0.6437 1.0032-0.7969l14.0443-4.9683c0.3712-0.1355 0.7734-0.1621 1.1594-0.0767 0.3858 0.0854 0.7393 0.2792 1.0188 0.5587 0.2795 0.2794 0.4733 0.6329 0.5586 1.0188 0.0854 0.3859 0.0588 0.7881-0.0767 1.1594L15.9956 19.854c-0.1472 0.4249-0.4283 0.7905-0.8012 1.0418s-0.8172 0.3746-1.2663 0.3514c-0.4491-0.0231-0.8784-0.1915-1.2235-0.4799-0.345-0.2882-0.587-0.6809-0.6896-1.1186l-0.9095-5.5454c-0.0978-0.334-0.2781-0.6381-0.5242-0.8842s-0.5501-0.4263-0.8842-0.5241z"
      />
    </Svg>
  );
}

export function EditPen({ size = 24, color = "#000", ...props }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        strokeWidth="1.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.1444 16.7345 4.637 13.3098c0.0269-0.2235 0.1306-0.4307 0.2932-0.5864l9.6643-9.6644c0.1243-0.1266 0.2793-0.2191 0.4498-0.2684 0.1705-0.0493 0.3509-0.0538 0.5236-0.013 0.8914 0.2374 1.7019 0.7116 2.3458 1.3722 0.6662 0.6413 1.1448 1.4524 1.3839 2.3457 0.0374 0.1729 0.0313 0.3524-0.0178 0.5223-0.0492 0.1699-0.1398 0.3249-0.2637 0.4512l-9.6643 9.6643c-0.1668 0.1535-0.3746 0.2553-0.5981 0.2932l-3.4365 0.4926c-0.1601 0.0217-0.3231 58e-4-0.4761-0.0462-0.153-0.0521-0.2918-0.139-0.4055-0.2538-0.1137-0.1148-0.1992-0.2545-0.2497-0.408-0.0506-0.1535-0.0648-0.3167-0.0415-0.4766z"
      />
      <Path
        strokeWidth="1.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12.7766 4.8887l4.4099 4.3982"
      />
      <Path
        strokeWidth="1.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.79 21.25h16.42"
      />
    </Svg>
  );
}

export function Copy({ size = 24, color = "#000", ...props }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        strokeWidth="1.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18.3267 7.286l-8.0436-1e-4c-1.0632 0-1.9251 0.8677-1.9251 1.938l0 10.0881c0 1.0703 0.8619 1.938 1.9251 1.938h8.0436c1.0631 0 1.925-0.8677 1.925-1.938V9.224c0-1.0704-0.8619-1.9381-1.925-1.9381z"
      />
      <Path
        strokeWidth="1.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.642 7.286V4.688c0-0.514-0.2028-1.0069-0.5639-1.3704-0.361-0.3634-0.8506-0.5676-1.3612-0.5676H5.6733c-0.5105 0-1.0002 0.2042-1.3612 0.5676C3.9511 3.6811 3.7483 4.174 3.7483 4.688l0 10.0881c0 0.514 0.2028 1.0069 0.5638 1.3703 0.361 0.3635 0.8507 0.5677 1.3612 0.5677H8.358"
      />
    </Svg>
  );
}

export function CreditCard({ size = 24, color = "#000", ...props }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        strokeWidth="1.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.1389 3.7778l-10.2778 0c-2.2705 0-4.1111 1.8406-4.1111 4.1111v8.2222c0 2.2705 1.8406 4.1111 4.1111 4.1111h10.2778c2.2705 0 4.1111-1.8406 4.1111-4.1111V7.8889c0-2.2705-1.8406-4.1111-4.1111-4.1111z"
      />
      <Path
        strokeWidth="1.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.25 8.9167l-18.5 0"
      />
      <Path
        strokeWidth="1.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.2178 16.1111h5.1389"
      />
    </Svg>
  );
}

export function Shop({ size = 24, color = "#000", ...props }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        strokeWidth="1.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.25 9.9445c-18e-4 0.6361-0.2003 1.2561-0.5683 1.775s-0.8875 0.9112-1.4873 1.1233c-0.3282 0.1245-0.6767 0.1872-1.0277 0.185-0.6362-18e-4-1.2562-0.2003-1.7751-0.5683s-0.9112-0.8875-1.1233-1.4873c-0.1245-0.3282-0.1872-0.6767-0.185-1.0278 23e-4 0.3511-0.0605 0.6996-0.185 1.0278-0.212 0.5998-0.6044 1.1193-1.1233 1.4873S12.6361 13.026 12 13.0278c-0.6361-18e-4-1.2561-0.2003-1.775-0.5683-0.5189-0.368-0.9113-0.8875-1.1233-1.4873-0.1245-0.3282-0.1873-0.6767-0.185-1.0278 22e-4 0.3511-0.0605 0.6996-0.185 1.0278-0.2121 0.5998-0.6044 1.1193-1.1233 1.4873-0.5189 0.368-1.1389 0.5665-1.7751 0.5683-0.351 22e-4-0.6995-0.0605-1.0277-0.185-0.5998-0.2121-1.1193-0.6044-1.4873-1.1233S2.7518 10.5806 2.75 9.9445l0.4625-1.6239 1.11-3.1656C4.4633 4.7522 4.726 4.4033 5.074 4.1565 5.4221 3.9097 5.8383 3.7774 6.265 3.7778l11.47 0c0.4267-4e-4 0.8429 0.1319 1.191 0.3787 0.348 0.2468 0.6107 0.5957 0.7515 0.9985l1.11 3.1656z"
      />
      <Path
        strokeWidth="1.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.1944 12.8428v5.3239c0 0.5451-0.2166 1.068-0.6021 1.4535s-0.9083 0.602-1.4535 0.602H6.8611c-0.5452 0-1.0681-0.2165-1.4536-0.602-0.3854-0.3855-0.602-0.9084-0.602-1.4535l0-5.3239"
      />
      <Path
        strokeWidth="1.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.9167 17.1389h6.1666"
      />
    </Svg>
  );
}

export function Plus({ size = 24, color = "#000", ...props }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        strokeWidth="1.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15"
      />
      <Path
        strokeWidth="1.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 12h-15"
      />
    </Svg>
  );
}

export function Multiply({ size = 24, color = "#000", ...props }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        strokeWidth="1.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 5 5 19"
      />
      <Path
        strokeWidth="1.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 19 5 5"
      />
    </Svg>
  );
}

export function NoteWithText({
  size = 24,
  color = "#000",
  ...props
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        strokeWidth="1.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.25 6.8611v6.3414c2e-4 0.2712-0.0533 0.5398-0.1573 0.7903-0.1041 0.2505-0.2567 0.4779-0.4491 0.6691l-5.9817 5.9817c-0.1912 0.1924-0.4186 0.345-0.6691 0.4491-0.2505 0.104-0.5191 0.1575-0.7903 0.1573H6.8611c-1.0903 0-2.136-0.4331-2.907-1.2041-0.771-0.771-1.2041-1.8167-1.2041-2.907V6.8611c0-1.0903 0.4331-2.136 1.2041-2.907 0.771-0.771 1.8167-1.2041 2.907-1.2041h10.2778c1.0903 0 2.136 0.4331 2.907 1.2041 0.771 0.771 1.2041 1.8167 1.2041 2.907z"
      />
      <Path
        strokeWidth="1.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.0556 21.0753l-0.5139-4.1111c-0.0585-0.4661-97e-4-0.9394 0.1427-1.3838 0.1523-0.4443 0.4042-0.848 0.7364-1.1802 0.3322-0.3321 0.7358-0.584 1.1802-0.7364 0.4443-0.1523 0.9176-0.2012 1.3837-0.1427l4.1111 0.5139"
      />
      <Path
        strokeWidth="1.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.8611 7.8889l9.25 0"
      />
      <Path
        strokeWidth="1.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.8611 12h4.1111"
      />
      <Path
        strokeWidth="1.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.8611 16.1111h3.0833"
      />
    </Svg>
  );
}

export function Trash2({ size = 24, color = "#000", ...props }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        strokeWidth="1.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.4706 6.0147l0 12.5147c0 0.7216 0.2866 1.4136 0.7968 1.9238 0.5102 0.5102 1.2022 0.7968 1.9238 0.7968h7.6176c0.7216 0 1.4136-0.2866 1.9238-0.7968s0.7968-1.2022 0.7968-1.9238V6.0147"
      />
      <Path
        strokeWidth="1.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.2941 6.0147l17.4118 0"
      />
      <Path
        strokeWidth="1.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.7353 6.0147l0-1.6324c0-0.4329 0.172-0.8481 0.4781-1.1542C9.5195 2.922 9.9347 2.75 10.3676 2.75h3.2647c0.433 0 0.8482 0.172 1.1543 0.4781 0.3061 0.3061 0.4781 0.7213 0.4781 1.1542v1.6324"
      />
    </Svg>
  );
}

export function ChevronRight({
  size = 24,
  color = "#000",
  ...props
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        strokeWidth="1.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.4169 20l6.5867-6.5866c0.3713-0.3767 0.5795-0.8844 0.5795-1.4134s-0.2082-1.0367-0.5795-1.4134L8.4169 4"
      />
    </Svg>
  );
}

export function ChevronLeft({
  size = 24,
  color = "#000",
  ...props
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        strokeWidth="1.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.5831 4 8.9964 10.5866C8.6251 10.9633 8.4169 11.471 8.4169 12c0 0.529 0.2082 1.0367 0.5795 1.4134L15.5831 20"
      />
    </Svg>
  );
}

export function Calendar({ size = 24, color = "#000", ...props }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        strokeWidth="1.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 4.625H7c-2.2091 0-4 1.7909-4 4v8.75c0 2.2091 1.7909 4 4 4h10c2.2091 0 4-1.7909 4-4v-8.75c0-2.2091-1.7909-4-4-4z"
      />
      <Path
        strokeWidth="1.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 10.625h18"
      />
      <Path
        strokeWidth="1.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 2.625v4"
      />
      <Path
        strokeWidth="1.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 2.625v4"
      />
    </Svg>
  );
}

export function Search({ size = 24, color = "#000", ...props }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        strokeWidth="1.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.7828 18.8276c1.5913 22e-4 3.1474-0.4675 4.4716-1.3495 1.3241-0.8821 2.3568-2.1368 2.9672-3.6055s0.7713-3.0854 0.4621-4.6455c-0.3091-1.5601-1.0744-2.9935-2.1988-4.1188-1.1245-1.1253-2.5577-1.892-4.1183-2.2031-1.5605-0.311-3.1784-0.1524-4.6487 0.4557C6.2475 3.969 4.9906 4.9994 4.1063 6.3216 3.222 7.6438 2.75 9.1984 2.75 10.7888c0 2.1302 0.846 4.1733 2.3521 5.6805 1.5061 1.5073 3.5493 2.3555 5.6807 2.3583z"
      />
      <Path
        strokeWidth="1.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.4883 16.491 21.25 21.25"
      />
    </Svg>
  );
}

export function Filter({ size = 24, color = "#000", ...props }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        strokeWidth="1.5"
        stroke={color}
        strokeLinecap="round"
        d="M21.25 12H8.8946"
        strokeMiterlimit="10"
      />
      <Path
        strokeWidth="1.5"
        stroke={color}
        strokeLinecap="round"
        d="M4.5339 12H2.75"
        strokeMiterlimit="10"
      />
      <Path
        strokeWidth="1.5"
        stroke={color}
        strokeLinecap="round"
        d="M21.2499 18.6071h-5.7482"
        strokeMiterlimit="10"
      />
      <Path
        strokeWidth="1.5"
        stroke={color}
        strokeLinecap="round"
        d="M11.1411 18.6071H2.75"
        strokeMiterlimit="10"
      />
      <Path
        strokeWidth="1.5"
        stroke={color}
        strokeLinecap="round"
        d="M21.25 5.3929l-3.1053 0"
        strokeMiterlimit="10"
      />
      <Path
        strokeWidth="1.5"
        stroke={color}
        strokeLinecap="round"
        d="M13.7839 5.3929l-11.0339 0"
        strokeMiterlimit="10"
      />
      <Path
        strokeWidth="1.5"
        stroke={color}
        strokeLinecap="round"
        d="M15.9642 7.5732c1.2042 0 2.1803-0.9761 2.1803-2.1803 0-1.2042-0.9761-2.1804-2.1803-2.1804-1.2042 0-2.1804 0.9762-2.1804 2.1804 0 1.2042 0.9762 2.1803 2.1804 2.1803z"
        strokeMiterlimit="10"
      />
      <Path
        strokeWidth="1.5"
        stroke={color}
        strokeLinecap="round"
        d="M6.7142 14.1804c1.2041 0 2.1803-0.9762 2.1803-2.1803 0-1.2042-0.9762-2.1804-2.1804-2.1804-1.2041 0-2.1803 0.9762-2.1803 2.1804 0 1.2041 0.9762 2.1803 2.1803 2.1803z"
        strokeMiterlimit="10"
      />
      <Path
        strokeWidth="1.5"
        stroke={color}
        strokeLinecap="round"
        d="M13.3214 20.7875c1.2041 0 2.1803-0.9762 2.1803-2.1804s-0.9762-2.1803-2.1803-2.1803c-1.2042 0-2.1804 0.9761-2.1804 2.1803s0.9762 2.1804 2.1804 2.1804z"
        strokeMiterlimit="10"
      />
    </Svg>
  );
}

export function Check({ size = 24, color = "#000", ...props }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        strokeWidth="1.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 11.7948l4.2214 4.2215c0.1485 0.1503 0.3254 0.2697 0.5203 0.3511 0.195 0.0814 0.4042 0.1234 0.6155 0.1234 0.2113 0 0.4204-0.042 0.6154-0.1234 0.1949-0.0814 0.3717-0.2008 0.5203-0.3511L19.5 7.5092"
      />
    </Svg>
  );
}

export function Minus({ size = 24, color = "#000", ...props }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        strokeWidth="1.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 12h-15"
      />
    </Svg>
  );
}

export function Tag({ size = 24, color = "#000", ...props }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        strokeWidth="1.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.5242 17.5242l-2.7225 2.7225c-0.2385 0.2388-0.5218 0.4283-0.8336 0.5575C13.6563 20.9335 13.3221 21 12.9846 21s-0.6717-0.0665-0.9835-0.1958c-0.3118-0.1292-0.5951-0.3187-0.8336-0.5575l-7.0374-7.0374C3.4074 12.4875 3.0009 11.5083 3 10.4869V5.5684c0-0.6812 0.2706-1.3345 0.7523-1.8161C4.2339 3.2706 4.8872 3 5.5684 3h4.9185c1.0214 9e-4 2.0006 0.4074 2.7224 1.1301l7.0374 7.0374c0.2388 0.2385 0.4283 0.5218 0.5575 0.8336C20.9335 12.3129 21 12.6471 21 12.9846s-0.0665 0.6717-0.1958 0.9835c-0.1292 0.3118-0.3187 0.5951-0.5575 0.8336z"
      />
      <Path
        strokeWidth="1.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.1256 11.694c1.4185 0 2.5684-1.1499 2.5684-2.5684 0-1.4184-1.1499-2.5684-2.5684-2.5684-1.4185 0-2.5684 1.15-2.5684 2.5684 0 1.4185 1.1499 2.5684 2.5684 2.5684z"
      />
    </Svg>
  );
}
