import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";

import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import Countdown from "./coundown";

export default function Socorro() {
  return (
    <div className="fixed bottom-2 right-2">
      <Dialog>
        <DialogTrigger asChild>
          <div className="outline-5 flex h-12 w-12 items-center justify-center rounded-lg border-2 border-white bg-stone-100 outline-black">
            {iconoSocorro2()}
          </div>
        </DialogTrigger>
        <DialogContent className="w-80 rounded-lg">
          <DialogHeader>
            <DialogTitle>Funcion de socorro</DialogTitle>
            <DialogDescription>
              Se ha activado la funcion de socorro, si no se cancela en 5
              segundos, se notificara a las autoridades
            </DialogDescription>
            <div className="flex flex-col items-center">
              <Countdown />
            </div>
          </DialogHeader>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button" variant="destructive">
                Cancelar
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function iconoSocorro2() {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="300.000000pt"
      height="300.000000pt"
      viewBox="0 0 300.000000 300.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
        fill="#FF0000"
        stroke="none"
      >
        <path
          d="M420 2984 c-208 -45 -377 -220 -410 -424 -6 -41 -10 -427 -10 -1065
          0 -843 3 -1011 15 -1070 44 -208 202 -366 410 -410 104 -22 2046 -22 2150 0
          208 44 366 202 410 410 12 59 15 227 15 1070 0 638 -4 1024 -10 1065 -33 206
          -203 380 -415 425 -102 21 -2056 21 -2155 -1z m1505 -519 c343 -40 624 -127
          674 -208 35 -56 53 -160 49 -278 -3 -118 -13 -138 -73 -163 -124 -52 -498 -47
          -604 8 -47 25 -54 48 -47 142 15 177 -31 203 -374 211 -264 7 -389 -11 -444
          -62 -25 -23 -26 -28 -26 -139 0 -112 -1 -115 -26 -135 -50 -40 -119 -53 -299
          -58 -131 -4 -187 -1 -244 11 -145 31 -167 63 -158 236 11 194 47 258 177 311
          156 63 429 118 695 139 152 12 544 4 700 -15z m-1060 -857 c99 -51 165 -154
          165 -255 l0 -33 -100 0 -100 0 0 27 c0 45 -37 109 -71 124 -93 38 -179 -15
          -179 -111 0 -70 56 -121 195 -176 128 -50 209 -115 242 -192 24 -57 27 -142 8
          -208 -35 -122 -152 -195 -312 -196 -208 0 -353 121 -353 294 l0 38 99 0 98 0
          7 -50 c12 -93 93 -145 185 -120 61 16 76 41 76 122 0 69 -1 71 -38 103 -21 18
          -64 43 -95 56 -170 67 -261 131 -294 207 -24 54 -26 171 -3 225 30 73 108 140
          195 168 14 5 70 7 125 6 85 -3 108 -7 150 -29z m817 -2 c71 -34 139 -108 170
          -184 22 -54 23 -69 23 -312 l0 -255 -29 -62 c-29 -64 -96 -137 -152 -166 -51
          -26 -115 -39 -199 -38 -178 0 -303 91 -350 254 -14 48 -16 97 -13 295 3 236 3
          237 31 297 30 64 81 123 135 157 61 38 111 48 222 45 91 -3 113 -7 162 -31z
          m792 4 c95 -46 152 -128 163 -236 l6 -54 -97 0 c-104 0 -100 -3 -111 64 -8 47
          -40 81 -90 95 -108 29 -195 -89 -136 -186 19 -31 46 -46 246 -139 133 -62 202
          -171 193 -303 -6 -82 -33 -136 -92 -188 -59 -52 -132 -75 -239 -75 -203 1
          -347 123 -347 295 l0 37 99 0 98 0 7 -50 c9 -65 45 -108 104 -121 110 -24 186
          48 163 154 -13 55 -52 92 -140 128 -181 75 -250 124 -287 203 -50 107 -23 251
          60 323 77 68 124 83 251 80 81 -3 109 -8 149 -27z"
        />
        <path
          d="M1420 1463 c-24 -12 -43 -34 -60 -68 -24 -49 -25 -55 -25 -280 0
        -215 1 -233 22 -277 28 -62 70 -88 143 -88 75 0 118 25 149 84 23 44 25 61 29
        229 7 265 -8 336 -81 391 -38 28 -131 33 -177 9z"
        />
      </g>
    </svg>
  );
}
