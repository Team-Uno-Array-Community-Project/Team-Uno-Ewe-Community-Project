import coastal from "./coastal.jpeg";
import pishkun from "./pishkun.jpeg";
import bamboofiber from "./bamboofiber.jpeg";
import biobalance from "./biobalance.jpeg";
import circularbamboo from "./circularbamboo.jpeg";
import circularsteel from "./circularsteel.jpeg";
import circularneedles from "./circularneedles.jpeg";
import curlylocks from "./curlylocks.jpeg";
import doublepointedbamboo from "./doublepointedbamboo.jpeg";
import doublepointedsteel from "./doublepointedsteel.jpeg";
import icelandictop from "./icelandictop.jpeg";
import interchangeablesets from "./interchangeablesets.jpeg";
import interchangeablesilver from "./interchangeablesilver.jpeg";
import interchangeabletips from "./interchangeabletips.jpeg";
import juicydk from "./juicydk.jpeg";
import manxloaghtantop from "./manxloaghtantop.jpeg";
import ohdang from "./ohdang.jpeg";
import rocketsquared from "./rocketsquared.jpeg";
import rovingpack from "./rovingpack.jpeg";
import rusticfingering from "./rusticfingering.jpeg";
import tussahtweed from "./tussahtweed.jpeg";
import washedfleece from "./washedfleece.jpeg";
import stra from "./stra.jpeg";
import silkmerinoroving from "./silkmerinoroving.jpeg";
import shetlandrovinggrey from "./shetlandrovinggrey.jpeg";
import organicstudioworsted from "./organicstudioworsted.jpeg";
import merinonaturalsoft from "./merinonaturalsoft.jpeg";

export const getImageFile = (filename) => {
    switch (filename) {
        case 'coastal.jpg':
            return coastal
        case 'pishkun.jpg':
            return pishkun
        case 'bamboofiber.jpg':
            return bamboofiber
        case 'biobalance.jpg':
            return biobalance
        case 'circularbamboo.jpg':
            return circularbamboo
        case 'circularsteel.jpg':
            return circularsteel
        case 'circularneedles.jpg':
            return circularneedles
        case 'curlylocks.jpg':
            return curlylocks
        case 'doublepointedbamboo.jpg':
            return doublepointedbamboo
        case 'doublepointedsteel.jpg':
            return doublepointedsteel
        case 'icelandictop.jpg':
            return icelandictop
        case 'interchangeablesets.jpg':
            return interchangeablesets
        case 'interchangeablesilver.jpg':
            return interchangeablesilver
        case 'interchangeabletips.jpg':
            return interchangeabletips
        case 'juicydk.jpg':
            return juicydk
        case 'manxloaghtantop.jpg':
            return manxloaghtantop
        case 'ohdang.jpg':
            return ohdang
        case 'rocketsquared.jpg':
            return rocketsquared
        case 'rovingpack.jpg':
            return rovingpack
        case 'rusticfingering.jpg':
            return rusticfingering
        case 'tussahtweed.jpg':
            return tussahtweed
        case 'washedfleece.jpg':
            return washedfleece
        case 'stra.jpg':
            return stra
        case 'silkmerinoroving.jpg':
            return silkmerinoroving
        case 'shetlandrovinggrey.jpg':
            return shetlandrovinggrey
        case 'organicstudioworsted.jpg':
            return organicstudioworsted
        case 'merinonaturalsoft.jpg':
            return merinonaturalsoft


        default:
            break;
    }
}