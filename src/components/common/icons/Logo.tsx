import { Icon, IconProps } from '@chakra-ui/icons';
import React from 'react';

export default function ArrowBottomCircleIcon(props: IconProps) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Icon viewBox="0 0 408 331" fill="none" {...props}>
      <g clipPath="url(#clip0_103_1415)">
        <path d="M84.693 184.046C85.7607 183.63 86.9691 183.296 88.318 183.046C89.6774 182.786 91.5107 182.65 93.818 182.65C96.1201 182.65 98.516 183.275 101.006 184.525C111.448 179.416 118.578 171.979 122.401 162.213C123.787 158.755 124.485 155.255 124.485 151.713C124.485 148.171 123.511 145.161 121.568 142.671C120.511 143.27 119.453 143.937 118.401 144.671L115.089 147.025C109.099 151.541 104.037 156.005 99.9014 160.421C92.9014 167.827 85.4691 176.812 77.6097 187.38C69.7607 197.952 61.7764 206.713 53.6514 213.671C45.5264 220.619 37.7816 225.609 30.4222 228.65C26.4066 230.223 21.3389 231.005 15.2139 231.005C11.2139 231.005 7.76595 230.036 4.8597 228.088C2.01595 226.161 0.588867 223.812 0.588867 221.046C0.588867 218.145 2.01595 216.307 4.8597 215.525C5.59928 215.348 6.33366 215.255 7.06803 215.255C7.80762 215.255 8.55762 215.499 9.31803 215.984C10.0837 216.458 10.4639 217.213 10.4639 218.255C10.4639 219.296 10.0837 220.15 9.31803 220.817C8.55762 221.484 7.52116 221.817 6.21387 221.817C4.89616 221.817 3.91699 221.588 3.27637 221.13V221.525C3.27637 223.791 4.39616 225.64 6.63053 227.067C8.87012 228.484 11.4326 229.192 14.318 229.192C17.2191 229.192 19.5785 228.979 21.4014 228.546C23.2191 228.104 25.2139 227.265 27.3805 226.025C29.5472 224.775 31.9743 223.025 34.6722 220.775C37.3649 218.525 40.5524 215.583 44.2347 211.942L57.0055 198.546L74.068 179.9C90.2191 161.567 105.552 148.562 120.068 140.88C114.761 135.577 106.011 132.921 93.818 132.921C79.5941 132.921 65.5524 138.15 51.693 148.609C45.0107 153.682 39.4847 159.041 35.1097 164.692C30.693 170.541 28.4847 175.609 28.4847 179.9C28.4847 183.807 30.4118 186.312 34.2764 187.421C35.3857 187.744 36.9274 187.9 38.9014 187.9C40.8857 187.9 43.4066 187.374 46.4639 186.317C49.5316 185.265 52.6149 183.77 55.7139 181.838C58.8232 179.895 61.8493 177.577 64.7972 174.88C67.7555 172.187 70.4274 169.208 72.818 165.942C78.1097 158.9 81.2868 151.536 82.3597 143.838C82.6201 142.369 82.9691 141.63 83.4014 141.63C83.8441 141.63 84.068 142.14 84.068 143.15C84.068 151.624 81.6305 159.588 76.7555 167.046C72.3389 173.77 66.4222 179.202 59.0055 183.338C51.7816 187.395 44.5316 189.421 37.2555 189.421C32.4639 189.421 29.1722 187.624 27.3805 184.025C26.7243 182.833 26.4014 180.88 26.4014 178.171C26.4014 175.452 27.2972 172.171 29.0889 168.338C30.891 164.494 33.3701 160.786 36.5264 157.213C39.6774 153.645 43.4118 150.296 47.7347 147.171C52.068 144.036 56.7451 141.291 61.7764 138.942C72.5941 133.916 83.8701 131.4 95.6097 131.4C107.344 131.4 116.599 133.984 123.381 139.15C130.282 135.833 136.032 134.171 140.631 134.171C142.157 134.171 142.922 134.4 142.922 134.859C142.922 135.098 142.506 135.27 141.672 135.38C140.839 135.494 139.641 135.734 138.089 136.109C133.532 137.083 129.224 138.624 125.172 140.734C129.49 144.874 131.651 149.984 131.651 156.067C131.651 161.958 128.891 167.874 123.381 173.817C118.266 179.291 111.912 183.567 104.318 186.65C107.995 189.932 109.839 194.562 109.839 200.546C109.839 205.661 107.927 210.604 104.11 215.38C98.4014 222.577 90.5472 227.39 80.5472 229.817C77.3232 230.609 74.3285 231.005 71.568 231.005C68.818 231.005 66.6982 230.765 65.2139 230.275C63.7399 229.791 62.568 229.182 61.693 228.442C60.0785 227.109 59.2764 225.536 59.2764 223.713C59.2764 221.895 59.7607 220.057 60.7347 218.192C61.7035 216.317 63.0316 214.463 64.7139 212.63C66.391 210.786 68.3805 209.015 70.6722 207.317C72.9743 205.609 75.443 204.109 78.068 202.817C83.9118 199.916 89.5785 198.463 95.068 198.463C96.0264 198.463 96.5055 198.765 96.5055 199.359C96.5055 199.958 95.5472 200.255 93.6305 200.255C91.7243 200.255 89.4951 200.604 86.943 201.296C84.3857 201.994 81.8857 202.937 79.443 204.13C77.0107 205.327 74.7139 206.708 72.5472 208.275C70.3805 209.848 68.4899 211.479 66.8805 213.171C63.3389 216.869 61.568 220.275 61.568 223.4C61.568 227.182 64.7191 229.067 71.0264 229.067C75.443 229.067 80.0941 227.411 84.9847 224.088C92.8024 218.838 98.141 211.52 101.006 202.13C101.922 199.005 102.381 196.119 102.381 193.463C102.381 190.812 102.032 188.937 101.339 187.838C96.5993 189.452 92.6097 190.255 89.3597 190.255C86.1097 190.255 83.943 189.911 82.8597 189.213C81.7868 188.52 81.2555 187.854 81.2555 187.213C81.2555 186.577 81.5576 185.994 82.1722 185.463C82.7972 184.921 83.6357 184.452 84.693 184.046ZM98.8597 185.484C97.4274 184.65 95.7555 184.234 93.8389 184.234C91.9326 184.234 90.5107 184.307 89.568 184.442C88.6201 184.583 87.7816 184.77 87.0472 185.005C85.5316 185.421 84.7764 185.88 84.7764 186.38C84.7764 187.494 86.1097 188.046 88.7764 188.046C91.443 188.046 94.8024 187.192 98.8597 185.484Z" fill="#241E4E"/>
        <path d="M138.67 226.025C138.67 228.14 140.034 229.192 142.753 229.192C145.472 229.192 148.482 228.494 151.774 227.088C155.065 225.687 158.295 223.859 161.461 221.609C167.586 217.333 173.222 211.994 178.378 205.588C186.487 196.327 191.347 190.729 192.961 188.796C192.961 188.796 194.201 187.255 196.69 184.171C198.482 184.494 199.795 184.65 200.628 184.65C202.972 184.65 204.743 184.562 205.94 184.38L181.899 214.005L169.69 230.38L159.19 244.046C171.065 238.338 180.18 232.65 186.545 226.984C190.68 223.307 194.571 219.255 198.211 214.838L208.149 202.817L209.607 203.984L200.899 214.275C195.743 220.359 191.44 224.9 187.982 227.9C184.534 230.885 181.383 233.343 178.524 235.275C173.091 238.869 165.841 242.807 156.774 247.088C148.201 257.807 141.748 265.265 137.399 269.463C133.055 273.656 129.618 276.635 127.086 278.4C124.545 280.176 122.081 281.572 119.69 282.588C115.638 284.338 110.826 285.213 105.253 285.213C102.451 285.213 100.581 284.218 99.6488 282.234C99.3883 281.692 99.2529 280.817 99.2529 279.609C99.2529 278.411 100.024 276.744 101.565 274.609C103.107 272.468 105.743 270.088 109.461 267.463C116.92 262.213 129.81 255.718 148.128 247.984L176.253 212.359L175.482 212.067C171.107 216.765 166.638 220.494 162.086 223.255C153.571 228.421 146.758 231.005 141.649 231.005C139.065 231.005 137.138 230.484 135.857 229.442C134.565 228.4 133.92 227.14 133.92 225.65C133.92 224.15 134.06 222.791 134.336 221.567C134.602 220.348 135.149 218.89 135.982 217.192C137.69 213.916 140.935 208.916 145.711 202.192C147.836 199.567 150.388 196.744 153.378 193.713L162.982 183.963L166.232 184.317C166.966 184.359 168.107 184.38 169.649 184.38C171.19 184.38 172.586 184.312 173.836 184.171C169.737 187.854 166.675 190.848 164.649 193.15L159.732 198.671C149.565 209.952 143.836 216.536 142.545 218.421C139.961 222.119 138.67 224.65 138.67 226.025ZM145.711 250.963C122.56 260.848 108.638 268.718 103.94 274.567C102.289 276.65 101.461 278.656 101.461 280.588C101.461 281.088 101.774 281.671 102.399 282.338C103.013 283.005 104.331 283.338 106.357 283.338C108.388 283.338 110.638 282.885 113.107 281.984C115.565 281.093 118.31 279.473 121.336 277.13C126.909 272.713 135.034 263.989 145.711 250.963Z" fill="#241E4E"/>
        <path d="M277.622 232.171C276.913 232.171 276.559 231.911 276.559 231.4C276.559 230.9 276.695 230.536 276.976 230.296C279.184 228.604 281.189 225.338 282.997 220.505C283.674 218.52 284.434 216.213 285.268 213.588L288.163 204.067C293.648 186.208 302.236 167.307 313.934 147.359L295.413 170.213L282.163 185.63L273.934 194.817C257.268 213.041 244.257 224.317 234.913 228.65C231.507 230.223 228.512 231.005 225.913 231.005C223.32 231.005 221.143 230.765 219.393 230.275C217.643 229.791 216.195 229.109 215.038 228.234C212.778 226.525 211.643 224.338 211.643 221.671C211.643 219.838 212.179 218.525 213.247 217.734C214.804 216.499 216.179 215.88 217.372 215.88C220.195 215.88 221.601 216.937 221.601 219.046C221.601 219.963 221.215 220.77 220.434 221.463C219.643 222.161 218.637 222.505 217.413 222.505C216.195 222.505 215.195 222.275 214.413 221.817V222.234C214.413 224.249 215.304 225.9 217.08 227.192C218.846 228.484 221.2 229.13 224.143 229.13C227.09 229.13 230.049 228.484 233.038 227.192C236.038 225.9 239.544 223.765 243.559 220.775C252.169 214.432 262.502 204.484 274.559 190.942L293.684 168.984C309.393 150.192 318.231 139.327 320.205 136.38C321.038 135.369 321.632 134.859 321.997 134.859C322.372 134.859 322.559 135.025 322.559 135.359C322.559 135.682 322.465 136.02 322.288 136.38L321.309 138.171C319.611 140.994 318.314 143.999 317.413 147.192C316.523 150.39 315.835 152.921 315.351 154.796C314.861 156.661 314.294 158.671 313.643 160.838L311.434 168.15C308.169 178.473 304.21 188.067 299.559 196.942C299.559 196.942 295.549 204.15 287.538 218.567L308.476 193.713L317.663 183.213L327.184 172.713L336.518 162.755C354.101 144.536 368.877 133.484 380.851 129.609C384.903 128.275 389.127 127.603 393.518 127.588C397.919 127.562 401.351 128.619 403.809 130.755C406.268 132.895 407.523 135.921 407.58 139.838C407.663 144.213 405.455 149.098 400.955 154.484C396.247 159.999 390.351 164.463 383.268 167.88C381.611 168.661 380.424 169.046 379.705 169.046C378.997 169.046 378.643 168.874 378.643 168.525C378.643 168.182 379.523 167.65 381.288 166.942C383.064 166.234 385.34 164.937 388.122 163.046C390.913 161.161 393.439 159.041 395.705 156.692C400.715 151.307 403.226 146.077 403.226 141.005C403.226 137.369 402.247 134.546 400.288 132.546C398.33 130.546 395.497 129.546 391.788 129.546C388.08 129.546 384.059 130.353 379.726 131.963C375.403 133.577 370.689 136.15 365.58 139.692C355.497 146.65 343.32 157.937 329.059 173.546L312.955 191.567L299.559 207.317L281.393 228.921C279.601 231.088 278.34 232.171 277.622 232.171ZM264.476 151.442C263.653 152.4 262.778 152.88 261.851 152.88C260.934 152.88 260.127 152.598 259.434 152.025C258.752 151.458 258.413 150.749 258.413 149.9C258.413 149.041 258.695 148.291 259.268 147.65C259.835 146.999 260.606 146.671 261.58 146.671C262.549 146.671 263.439 146.895 264.247 147.338C265.049 147.77 265.773 148.4 266.413 149.234C267.799 151.025 268.497 153.291 268.497 156.025C268.497 158.765 267.872 161.275 266.622 163.567C265.382 165.848 263.752 167.791 261.726 169.4C257.393 172.848 252.393 174.567 246.726 174.567C240.976 174.567 236.231 172.984 232.497 169.817C228.361 166.359 226.288 161.588 226.288 155.505C226.288 148.978 229.163 143.525 234.913 139.15C240.715 134.734 248.205 132.525 257.372 132.525C262.84 132.525 266.997 132.952 269.83 133.796C272.663 134.645 275.111 135.499 277.184 136.359C279.252 137.208 281.33 138.14 283.413 139.15L290.455 142.4C294.038 143.874 296.96 144.609 299.226 144.609C303.601 144.609 307.486 143.088 310.893 140.046C311.111 139.869 311.377 139.775 311.684 139.775C311.986 139.775 312.143 139.937 312.143 140.255C312.143 140.619 311.814 141.166 311.163 141.9C308.455 144.624 304.356 146.562 298.872 147.713C297.398 147.994 296.038 148.13 294.788 148.13C293.549 148.13 292.08 147.994 290.372 147.713C288.674 147.437 286.955 147.067 285.205 146.609C281.648 145.598 278.434 144.265 275.559 142.609C272.684 140.942 270.215 139.64 268.163 138.692C266.122 137.749 264.294 137.025 262.684 136.525C260.018 135.65 257.023 135.213 253.705 135.213C250.382 135.213 247.195 135.734 244.143 136.775C241.085 137.807 238.377 139.244 236.018 141.088C231.002 145.13 228.497 150.077 228.497 155.921C228.497 160.854 230.132 164.911 233.413 168.088C236.715 171.312 241.064 172.921 246.455 172.921C251.564 172.921 256.049 171.421 259.913 168.421C264.205 165.202 266.351 161.13 266.351 156.213C266.351 154.369 265.726 152.775 264.476 151.442Z" fill="#241E4E"/>
        <path d="M151.06 330.226V308.934H158.81C160.544 308.934 162.065 309.221 163.372 309.788C164.674 310.346 165.768 311.101 166.643 312.059C167.528 313.018 168.19 314.143 168.622 315.434C169.065 316.726 169.289 318.101 169.289 319.559C169.289 321.174 169.044 322.637 168.56 323.955C168.07 325.262 167.362 326.382 166.435 327.309C165.518 328.242 164.414 328.966 163.122 329.476C161.841 329.976 160.403 330.226 158.81 330.226H151.06ZM165.122 319.559C165.122 318.533 164.981 317.596 164.705 316.747C164.424 315.887 164.018 315.143 163.476 314.518C162.935 313.893 162.268 313.413 161.476 313.08C160.695 312.736 159.81 312.559 158.81 312.559H155.205V326.601H158.81C159.82 326.601 160.726 326.424 161.518 326.059C162.31 325.7 162.966 325.205 163.497 324.58C164.023 323.945 164.424 323.2 164.705 322.351C164.981 321.492 165.122 320.559 165.122 319.559Z" fill="#D6B10A"/>
        <path d="M196.601 326.601V330.226H181.81V308.934H196.33V312.559H185.955V317.684H194.914V321.059H185.955V326.601H196.601Z" fill="#D6B10A"/>
        <path d="M207.843 319.434C207.843 318.132 208.072 316.846 208.53 315.58C208.999 314.32 209.687 313.184 210.593 312.184C211.494 311.184 212.593 310.382 213.884 309.768C215.187 309.143 216.666 308.83 218.322 308.83C220.28 308.83 221.973 309.262 223.405 310.122C224.832 310.971 225.895 312.09 226.593 313.476L223.426 315.663C223.145 315.054 222.806 314.549 222.405 314.143C221.999 313.726 221.572 313.403 221.114 313.163C220.655 312.929 220.176 312.757 219.676 312.643C219.176 312.533 218.687 312.476 218.218 312.476C217.176 312.476 216.265 312.695 215.489 313.122C214.723 313.538 214.082 314.08 213.572 314.747C213.056 315.413 212.666 316.174 212.405 317.018C212.155 317.867 212.03 318.715 212.03 319.559C212.03 320.492 212.176 321.393 212.468 322.268C212.77 323.143 213.197 323.913 213.739 324.58C214.291 325.236 214.952 325.762 215.718 326.163C216.494 326.554 217.343 326.747 218.259 326.747C218.744 326.747 219.244 326.695 219.759 326.58C220.285 326.455 220.78 326.262 221.239 325.997C221.707 325.736 222.145 325.403 222.551 324.997C222.952 324.58 223.27 324.09 223.509 323.518L226.905 325.455C226.556 326.262 226.072 326.971 225.447 327.58C224.822 328.195 224.114 328.705 223.322 329.122C222.53 329.538 221.681 329.861 220.78 330.08C219.89 330.299 219.015 330.413 218.155 330.413C216.624 330.413 215.228 330.096 213.968 329.455C212.718 328.82 211.634 327.986 210.718 326.955C209.812 325.913 209.103 324.742 208.593 323.434C208.093 322.132 207.843 320.799 207.843 319.434Z" fill="#D6B10A"/>
        <path d="M248.068 330.372C246.495 330.372 245.079 330.07 243.818 329.455C242.553 328.846 241.464 328.039 240.548 327.039C239.641 326.028 238.943 324.872 238.443 323.58C237.943 322.278 237.693 320.945 237.693 319.58C237.693 318.164 237.954 316.809 238.485 315.518C239.011 314.216 239.74 313.059 240.673 312.059C241.6 311.059 242.704 310.268 243.985 309.684C245.261 309.091 246.652 308.789 248.152 308.789C249.693 308.789 251.094 309.111 252.36 309.747C253.62 310.372 254.704 311.2 255.61 312.226C256.511 313.242 257.214 314.403 257.714 315.705C258.214 316.997 258.464 318.309 258.464 319.643C258.464 321.059 258.199 322.414 257.673 323.705C257.157 324.997 256.443 326.138 255.527 327.122C254.61 328.111 253.506 328.903 252.214 329.497C250.933 330.08 249.553 330.372 248.068 330.372ZM241.881 319.58C241.881 320.497 242.016 321.388 242.298 322.247C242.574 323.111 242.975 323.872 243.506 324.539C244.048 325.195 244.699 325.721 245.464 326.122C246.225 326.528 247.1 326.726 248.089 326.726C249.089 326.726 249.969 326.528 250.735 326.122C251.511 325.705 252.162 325.158 252.693 324.476C253.219 323.799 253.615 323.033 253.881 322.184C254.157 321.325 254.298 320.455 254.298 319.58C254.298 318.664 254.152 317.778 253.86 316.914C253.568 316.054 253.157 315.299 252.631 314.643C252.1 313.976 251.449 313.45 250.673 313.059C249.907 312.674 249.048 312.476 248.089 312.476C247.089 312.476 246.199 312.684 245.423 313.101C244.641 313.507 243.99 314.049 243.464 314.726C242.949 315.393 242.553 316.153 242.277 316.997C242.011 317.846 241.881 318.705 241.881 319.58Z" fill="#D6B10A"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M204.307 68.4688C200.495 53.849 189.141 50.599 189.141 38.5782C189.141 26.5678 200.745 11.0053 204.307 0.666748C207.865 11.0053 219.469 26.5678 219.469 38.5782C219.469 50.599 208.026 54.1772 204.307 68.4688Z" fill="#D6B10A"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M156.558 57.7709C155.578 61.6511 157.474 65.8021 161.703 68.0782C167.177 71.0261 174.485 69.7136 178.021 65.1511C179.297 63.4948 179.906 61.6355 179.906 59.8021C189.802 65.8542 192.407 75.823 191.839 83.4636C191.042 94.2761 183.964 104.818 176.302 112.297C189.104 106.719 198.005 95.0625 200.162 82.2917C202.12 70.6615 198.177 56.6042 183.172 50.2084C176.448 47.3386 161.917 46.3021 157.313 55.8334C156.979 56.4636 156.729 57.1094 156.563 57.7657L156.558 57.7709Z" fill="#D6B10A"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M252.052 57.7709C253.032 61.6511 251.136 65.8021 246.907 68.0782C241.433 71.0261 234.125 69.7136 230.594 65.1511C229.313 63.4948 228.703 61.6355 228.709 59.8021C218.808 65.8542 216.209 75.823 216.771 83.4636C217.568 94.2761 224.651 104.818 232.313 112.297C219.505 106.719 210.604 95.0625 208.448 82.2917C206.49 70.6615 210.438 56.6042 225.438 50.2084C232.167 47.3386 246.688 46.3021 251.297 55.8334C251.636 56.4636 251.88 57.1094 252.052 57.7657V57.7709Z" fill="#D6B10A"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M204.307 87.7551C201.667 93.8905 196.219 97.7551 196.219 102.943C196.219 108.141 202.406 114.865 204.307 119.333C206.203 114.865 212.391 108.141 212.391 102.943C212.391 97.7551 206.943 93.8905 204.307 87.7551Z" fill="#D6B10A"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M184.297 90.3072H224.318V78.7395H184.297V90.3072Z" fill="#D6B10A"/>
      </g>
      <defs>
        <clipPath id="clip0_103_1415">
          <rect width="408" height="331" fill="white"/>
        </clipPath>
      </defs>
    </Icon>
  );
}