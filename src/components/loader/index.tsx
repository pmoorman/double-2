import React, { FC } from "react";
import { useMediaQuery } from "react-responsive";

import * as styles from "./index.module.scss";

export interface LoaderProps {}

export const LoadingScreen: FC<LoaderProps> = () => {
  const isMdDevice = useMediaQuery({ query: "(min-width: 992px)" });

  return (
    <div className={styles.loader}>
      <div className={styles.loaderInner}>
        <div className="logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="128"
            height="32"
            viewBox="0 0 128 32"
            fill="none"
          >
            <g clip-path="url(#clip0_5007_2187)">
              <path
                d="M9.91203 32C13.1734 32 15.1504 30.8363 16.4924 29.1782V31.04L16.8387 31.3891H24.6602L25.0065 31.04V29.1345L24.6602 28.7854H24.1407C23.2748 28.7854 22.4234 27.9127 22.4234 27.0545V4.62543L22.8563 0.552704L22.51 0.203613H21.1391L14.5154 2.76361L14.1691 3.1127V4.27634L14.5154 4.62543H15.0349C15.9008 4.62543 16.7522 5.49816 16.7522 6.35634V11.4618C15.4678 10.3854 13.6207 9.3818 10.8212 9.3818C5.36637 9.3818 0.0703125 13.5854 0.0703125 20.6836C0.0703125 28.6254 5.36637 32 9.91203 32ZM11.3695 29.1345C7.5454 29.1345 6.00132 25.3236 6.00132 20.6836C6.00132 16.0436 7.5454 12.2327 11.3695 12.2327C15.1937 12.2327 16.7377 16.0436 16.7377 20.6836C16.7377 25.3236 15.2081 29.1345 11.3695 29.1345Z"
                fill="#fff"
              />
              <path
                d="M37.9542 32.0001C44.5778 32.0001 49.5997 27.2729 49.5997 20.6983C49.5997 14.1092 44.5778 9.39648 37.9542 9.39648C31.3305 9.39648 26.3086 14.1238 26.3086 20.6983C26.2942 27.2729 31.3305 32.0001 37.9542 32.0001ZM37.9542 29.2219C34.0002 29.2219 32.2396 25.4547 32.2396 20.6838C32.2396 15.9128 34.0002 12.1456 37.9542 12.1456C41.9082 12.1456 43.6687 15.9128 43.6687 20.6838C43.6687 25.4547 41.9082 29.2219 37.9542 29.2219Z"
                fill="#fff"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M76.8878 8.58182C75.5746 9.29455 74.5212 10.2109 73.7708 11.3455V0H67.8687V23.0109C67.8254 26.5018 65.7185 28.5818 63.0488 28.5818C60.7255 28.5818 59.0082 27.2873 59.0082 24.4218V14.1527L59.4412 10.08L59.0948 9.73091H57.7239L51.0137 12.1164L50.7539 12.4655V13.6291L51.1002 13.9782H51.6197C52.4856 13.9782 53.337 14.8509 53.337 15.7091V24.5818C53.337 29.5564 56.4252 31.9855 60.8987 31.9855C63.6982 31.9855 66.3679 30.6909 67.8687 28.7418V31.4182H73.7708V28.0727C74.5645 29.1782 75.6035 30.08 76.8878 30.7927C78.201 31.4764 79.7451 31.8109 81.4768 31.8109C83.4682 31.8109 85.2721 31.3018 86.8739 30.2836C88.5045 29.2655 89.7744 27.84 90.7124 25.9927C91.6648 24.1309 92.141 21.9927 92.141 19.5782C92.141 17.1636 91.6648 15.0691 90.7124 13.2509C89.7888 11.4036 88.5045 9.99273 86.8739 9.00364C85.2721 8.01455 83.4682 7.52 81.4768 7.52C79.7595 7.52 78.2299 7.86909 76.8878 8.58182ZM85.2288 15.9273C85.8204 16.9455 86.109 18.1673 86.109 19.5782C86.109 21.0182 85.8204 22.2691 85.2288 23.3164C84.666 24.3636 83.9156 25.1636 82.9487 25.7309C82.0252 26.2982 81.015 26.5745 79.9183 26.5745C78.8504 26.5745 77.8403 26.3127 76.8878 25.7745C75.9643 25.2073 75.1994 24.4073 74.6078 23.36C74.045 22.3127 73.7708 21.0764 73.7708 19.6655C73.7708 18.2545 74.045 17.0182 74.6078 15.9709C75.1994 14.9236 75.9498 14.1236 76.8878 13.5855C77.8403 13.0182 78.8504 12.7418 79.9183 12.7418C81.015 12.7418 82.0252 13.0036 82.9487 13.5418C83.9011 14.08 84.666 14.88 85.2288 15.9273Z"
                fill="#fff"
              />
              <path
                d="M101.347 0.567383V32.0001H95.4453V0.567383H101.347Z"
                fill="#fff"
              />
              <path
                d="M127.884 19.3453C127.884 20.189 127.826 20.9599 127.711 21.6435H110.654C110.798 23.3453 111.39 24.669 112.429 25.629C113.468 26.589 114.752 27.069 116.268 27.069C118.461 27.069 120.019 26.1235 120.943 24.2181H127.307C126.629 26.4872 125.344 28.349 123.425 29.8181C121.506 31.2726 119.168 31.9999 116.383 31.9999C114.132 31.9999 112.111 31.5053 110.322 30.5163C108.547 29.4981 107.162 28.0726 106.152 26.2253C105.17 24.3781 104.68 22.269 104.68 19.8544C104.68 17.4253 105.17 15.2872 106.152 13.4399C107.133 11.5926 108.504 10.1817 110.279 9.19262C112.054 8.20353 114.074 7.70898 116.383 7.70898C118.605 7.70898 120.582 8.18898 122.328 9.14898C124.103 10.109 125.46 11.4908 126.412 13.2653C127.394 15.0253 127.884 17.0472 127.884 19.3453ZM121.78 17.6435C121.751 16.1163 121.203 14.8944 120.135 13.9926C119.067 13.0617 117.768 12.5963 116.21 12.5963C114.752 12.5963 113.511 13.0472 112.501 13.949C111.52 14.8217 110.914 16.0581 110.683 17.6435H121.78Z"
                fill="#fff"
              />
            </g>
            <defs>
              <clipPath id="clip0_5007_2187">
                <rect width="128" height="32" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};
