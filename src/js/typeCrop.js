/* globals define: true */
/* globals Promise: true */

define([], function() {

    return function typeCrop(titles, fontFilePath) {

        'use strict';

        fontFilePath = fontFilePath === undefined ? undefined : fontFilePath;

        var fontFamily = 'Calibre-Bold';
        var svgID = 'typecrop-svg';

        /* Create a Array-like Node List of all the elements */
        var allTitles = document.querySelectorAll(titles);

        /* Convert from node list to array */
        var words = [].slice.call(allTitles);

        var svgAttributes = {
            A: {
                viewBox: '0 0 233 417',
                path: 'M187.1,110.9h-59L2.8,332h57.6l23.8-42.8h80.6l7.9,42.8H230L187.1,110.9z M110.5,241.6l34.9-62.3l11.2,62.3 H110.5z'
            },
            a: {
                viewBox: '0 0 233 417',
                path: 'M145.9,110.9h-59L2.6,332h57.2l15.5-42.8h80.3l15.8,42.8h6l30.7-57.7L145.9,110.9z M93,241.6l22.7-62.3 l22.7,62.3H93z'
            },
            B: {
                viewBox: '0 0 201 417',
                path: 'M156.2,217.8c16.2-5.8,29.5-23,29.5-46.8c0-39.6-27.7-60.1-73.8-60.1H97L17.2,261v71h101.5 c46.1,0,73.4-22,73.4-61.9C192.2,245.2,177.1,224.7,156.2,217.8z M72.3,158.4h33.1c16.9,0,25.9,6.1,25.9,19.8s-9,20.2-25.9,20.2 H72.3V158.4z M111.2,284.4H72.3v-42.8h38.9c16.2,0,25.2,8.3,25.2,21.6C136.4,275.8,127.4,284.4,111.2,284.4z'
            },
            b: {
                viewBox: '0 0 201 417',
                path: 'M185.7,171c0-39.6-27.7-60.1-73.8-60.1H17.2v221h95.6l57-107.1c-4.1-3-8.7-5.4-13.6-7 C172.4,212.1,185.7,194.8,185.7,171z M72.3,158.4h33.1c16.9,0,25.9,6.1,25.9,19.8s-9,20.2-25.9,20.2H72.3V158.4z M111.2,284.4 H72.3v-42.8h38.9c16.2,0,25.2,8.3,25.2,21.6C136.4,275.8,127.4,284.4,111.2,284.4z'
            },
            C: {
                viewBox: '0 0 217 417',
                path: 'M113.5,284.8c-30.6,0-47.9-27.4-47.9-63.4c0-36.4,17.3-63.4,47.9-63.4c20.2,0,32,10.8,37.8,27h57.6 c-7.9-44.9-40.1-77.6-94.9-77.8L21.4,281.4c17.8,33.5,51.1,54.2,92.1,54.2c55.1,0,87.5-32.8,95.4-78.1h-57.6 C145.5,274,133.6,284.8,113.5,284.8z'
            },
            c: {
                viewBox: '0 0 217 417',
                path: 'M113.5,284.8c-30.6,0-47.9-27.4-47.9-63.4c0-36.4,17.3-63.4,47.9-63.4c20.2,0,32,10.8,37.8,27h57.6 c-7.9-45-40.3-77.8-95.4-77.8c-61.9,0-106.2,47.2-106.2,114.1c0,67,44.3,114.1,106.2,114.1c5.6,0,11.1-0.4,16.2-1l41-77.1h-19.4 C145.5,274,133.6,284.8,113.5,284.8z'
            },
            D: {
                viewBox: '0 0 219 417',
                path: 'M99.9,110.9h-0.6l-83,156v65h83.5c69.5,0,111.6-43.2,111.6-110.5S169.3,110.9,99.9,110.9z M97,281.9H73.2 V160.6H97c36.7,0,57.2,23.4,57.2,60.8C154.2,258.5,133.7,281.9,97,281.9z'
            },
            d: {
                viewBox: '0 2 219 417',
                path: 'M196.7,160.7c-18-31.4-51.6-49.7-96.9-49.7H16.3v221h83.5c2,0,3.9,0,5.8-0.1l38.6-72.5 c-9.5,14.4-25.5,22.6-47.3,22.6H73.2V160.6H97c36.7,0,57.2,23.4,57.2,60.8c0,11.1-1.9,21-5.4,29.3L196.7,160.7z'
            },
            E: {
                viewBox: '0 1 187 417',
                polygon: '174.6,160.6 174.6,110.9 99.6,110.9 16.5,267.1 16.5,332 174.6,332 174.6,281.9 73.4,281.9 73.4,243.8 165.9,243.8 165.9,195.2 73.4,195.2 73.4,160.6'
            },
            e: {
                viewBox: '0 1 187 417',
                polygon: '174.6,160.6 174.6,110.9 16.5,110.9 16.5,332 119.8,332 146.4,281.9 73.4,281.9 73.4,243.8 165.9,243.8 165.9,195.2 73.4,195.2 73.4,160.6'
            },
            F: {
                viewBox: '0 1 183 417',
                polygon: '172,161 172,110.9 100.1,110.9 16.5,268.1 16.5,332 73.8,332 73.8,253.8 164.1,253.8 164.1,204.9 73.8,204.9 73.8,161'
            },
            f: {
                viewBox: '0 1 183 417',
                polygon: '172,161 172,110.9 16.5,110.9 16.5,332 73.8,332 73.8,253.8 123.3,253.8 149.3,204.9 73.8,204.9 73.8,161'
            },
            G: {
                viewBox: '0 0 224 417',
                path: 'M115.9,158.1c20.9,0,32.8,10.1,38.9,27h59c-8.3-45-41-77.8-97.9-77.8c-0.4,0-0.8,0-1.2,0l-37.9,71.4 C85.4,165.8,98.7,158.1,115.9,158.1z M124.2,213.9v43.2h34.2c-5.4,16.9-19.8,27.7-41.8,27.7c-31.7,0-51.1-25.6-51.1-63.4 c0-12.3,2.1-23.4,6-32.8L21.9,282c18.3,33.2,52.5,53.6,94.8,53.6c58.7,0,99-38.5,99-99.7v-22H124.2z'
            },
            g: {
                viewBox: '0 0 224 417',
                path: 'M123.7,257.1h34.2c-5.4,16.9-19.8,27.7-41.8,27.7c-31.7,0-51.1-25.6-51.1-63.4c0-36.7,18.4-63.4,50.4-63.4 c20.9,0,32.8,10.1,38.9,27h59c-8.3-45-41-77.8-97.9-77.8c-63.4,0-108.7,46.8-108.7,114.1s45.4,114.1,109.4,114.1 c6.3,0,12.3-0.4,18.1-1.3l64-120.4h-74.6V257.1z'
            },
            H: {
                viewBox: '0 0 234 417',
                polygon: '159.7,110.9 159.7,194.8 74.4,194.8 74.4,110.9 64.6,110.9 16.5,201.4 16.5,332 74.4,332 74.4,244.5 159.7,244.5 159.7,332 217.7,332 217.7,110.9'
            },
            h: {
                viewBox: '0 0 234 417',
                polygon: '160.2,110.9 160.2,194.8 74.9,194.8 74.9,110.9 17,110.9 17,332 74.9,332 74.9,244.5 160.2,244.5 160.2,332 170.6,332 218.2,242.4 218.2,110.9'
            },
            I: {
                viewBox: '0 0 91 417',
                polygon: '64.6,110.9 16.4,201.5 16.4,332 74.4,332 74.4,110.9'
            },
            i: {
                viewBox: '0 0 91 417',
                polygon: '16.4,110.9 16.4,332 26.7,332 74.4,242.3 74.4,110.9'
            },
            J: {
                viewBox: '0 0 194 417',
                path: 'M122.8,110.9v135.7c0,24.5-8.6,37.1-29.9,37.1c-17.6,0-27.7-10.8-28.8-29.9H45.7l-25.3,47.7 c14.6,21.2,39.5,34.1,72.9,34.1c50.4,0,87.5-27.4,87.5-88.6V110.9H122.8z'
            },
            j: {
                viewBox: '0 0 194 417',
                path: 'M122.8,110.9v135.7c0,24.5-8.6,37.1-29.9,37.1c-17.6,0-27.7-10.8-28.8-29.9H5.4c2.2,48.2,33.8,81.7,87.8,81.7 c0.2,0,0.3,0,0.5,0l87-163.5v-61.1H122.8z'
            },
            K: {
                viewBox: '0 0 219 417',
                polygon: '136.1,208.1 213.5,110.9 145.8,110.9 74.5,201.6 74.5,110.9 64.1,110.9 16.5,200.4 16.5,332 74.5,332 74.5,270.4 92.9,247 148.7,332 216.7,332'
            },
            k: {
                viewBox: '0 0 219 417',
                polygon: '213.5,110.9 145.8,110.9 74.5,201.6 74.5,110.9 16.5,110.9 16.5,332 74.5,332 74.5,270.4 92.9,247 137.8,315.4 168.4,257.8 136.1,208.1'
            },
            L: {
                viewBox: '0 0 183 417',
                polygon: '74.6,281.9 74.6,110.9 64.1,110.9 16.7,200.2 16.7,332 173.6,332 173.6,281.9'
            },
            l: {
                viewBox: '0 0 183 417',
                polygon: '74.6,281.9 74.6,110.9 16.7,110.9 16.7,332 136.7,332 163.3,281.9'
            },
            M: {
                viewBox: '0 0 271 417',
                path: 'M17.1,332h54V200.7l-54,101.6V332z M184.5,110.9l-48.2,137.5l-36.1-102.3l-29,54.5l46,131.3h37.4l45.7-131.4 V332h54.4v-221H184.5z'
            },
            m: {
                viewBox: '0 0 271 417',
                polygon: '184.5,110.9 136.3,248.4 87.7,110.9 17.1,110.9 17.1,332 71.1,332 71.1,200.6 117.2,332 154.6,332 200.3,200.6 200.3,300.9 254.7,198.7 254.7,110.9'
            },
            N: {
                viewBox: '0 0 228 417',
                path: 'M155.7,110.9v121.7l-56.3-80.3l-27,50.7L164.7,332h46.8v-221H155.7z M16.4,332h55.8V203.5L16.4,308.4V332z'
            },
            n: {
                viewBox: '0 0 228 417',
                polygon: '155.2,110.9 155.2,232.6 69.9,110.9 15.9,110.9 15.9,332 71.7,332 71.7,202.7 129.1,283 211,129.1 211,110.9'
            },
            O: {
                viewBox: '0 0 232 417',
                path: 'M116.2,107.3c-0.2,0-0.4,0-0.7,0L23,281.5c17.9,33.1,51.3,54.1,93.3,54.1c64.1,0,108.4-48.2,108.4-114.1 C224.6,155.2,180.3,107.3,116.2,107.3z M116.2,284.8c-29.9,0-49.3-25.2-49.3-63.4c0-38.2,19.4-63.4,49.3-63.4 c29.9,0,50,25.2,50,63.4C166.3,259.6,146.1,284.8,116.2,284.8z'
            },
            o: {
                viewBox: '0 0 232 417',
                path: 'M210.2,160.6c-18.1-32.7-51.6-53.2-93.5-53.2C53,107.3,9.1,155.2,9.1,221.4c0,65.9,43.9,114.1,107.6,114.1 c0.2,0,0.3,0,0.5,0l37.3-70.2c-8.8,12.3-21.9,19.4-37.8,19.4c-29.9,0-49.3-25.2-49.3-63.4c0-38.2,19.4-63.4,49.3-63.4 c29.9,0,50,25.2,50,63.4c0,11.6-1.9,22-5.3,30.8L210.2,160.6z'
            },
            P: {
                viewBox: '0 0 202 417',
                path: 'M113.3,110.9H99.4L16.5,266.8V332h57.2v-68.8h39.6c47.9,0,80.3-27,80.3-76 C193.6,137.9,161.2,110.9,113.3,110.9z M107.2,215H73.7v-55.4h33.5c20.9,0,30.2,10.8,30.2,27.7C137.5,203.8,128.1,215,107.2,215z'
            },
            p: {
                viewBox: '0 0 202 417',
                path: 'M112.8,110.9H16v221h48.7l8.5-16v-52.8h28.1l70.2-132.1C157.4,117.9,137.1,110.9,112.8,110.9z M106.7,215 H73.2v-55.4h33.5c20.9,0,30.2,10.8,30.2,27.7C137,203.8,127.6,215,106.7,215z'
            },
            Q: {
                viewBox: '0 0 231 417',
                path: 'M223.6,221.4c0-66.2-44.3-114.1-108.4-114.1c-0.1,0-0.3,0-0.4,0l-39,73.4c8.6-14.3,22.3-22.7,39.5-22.7 c29.9,0,50,25.2,50,63.4c0,14.4-2.2,26.3-5.8,36L143,236.9L108,264.3l17.6,22c-3.2,0.7-6.8,1.1-10.4,1.1 c-29.9,0-49.3-27.7-49.3-65.9c0-13.7,2.5-25.8,7.1-35.6l-51,95.8c17.9,33,51.3,53.9,93.1,53.9c15.1,0,29.9-3.2,42.8-9l17.6,21.6 l34.9-28.1l-16.2-19.8C212.4,280.1,223.6,252.8,223.6,221.4z'
            },
            q: {
                viewBox: '0 0 231 417',
                path: 'M115.2,107.3c-63.7,0-107.6,47.9-107.6,114.1c0,65.9,43.9,114.1,107.6,114.1c15.1,0,29.9-3.2,42.8-9l0.2,0.3 l64.4-121.2C216.3,147.7,174.1,107.3,115.2,107.3z M159.5,257.4L143,236.9L108,264.3l17.6,22c-3.2,0.7-6.8,1.1-10.4,1.1 c-29.9,0-49.3-27.7-49.3-65.9c0-38.2,19.4-63.4,49.3-63.4c29.9,0,50,25.2,50,63.4C165.3,235.8,163.1,247.7,159.5,257.4z'
            },
            R: {
                viewBox: '0 0 206 417',
                path: 'M151.9,252.8c27-10.1,43.9-33.1,43.9-66.6c0-48.2-32.8-75.2-80.3-75.2H99.1L16.2,266.9V332h57.2v-73.1h20.2 l46.1,73.1h64.1L151.9,252.8z M109.4,212.8h-36v-53.3h36c20.5,0,29.9,10.4,29.9,26.6S129.9,212.8,109.4,212.8z'
            },
            r: {
                viewBox: '0 0 206 417',
                path: 'M196.3,186.2c0-48.2-32.8-75.2-80.3-75.2H16.7v221h57.2v-73.1h20.2l40.5,64.2l28.6-53.8l-10.8-16.5 C179.4,242.7,196.3,219.6,196.3,186.2z M109.9,212.8h-36v-53.3h36c20.5,0,29.9,10.4,29.9,26.6S130.4,212.8,109.9,212.8z'
            },
            S: {
                viewBox: '0 0 195 417',
                path: 'M94.5,153.4c19.1,0,29.2,9.4,33.8,21.6h56.5c-5.9-36.9-34.7-65.7-85.3-67.6l-29.2,54.9 C74.9,156.6,83.5,153.4,94.5,153.4z M128.4,200.6l-43.2-10.1c-11.5-2.5-18.4-7.9-18.4-17.6c0-1.9,0.3-3.7,0.8-5.3l-32.5,61.1 c8.8,5.6,19.4,9.4,31,11.9l42.5,9c14,3.2,20.9,7.9,20.9,18.4c0,13.7-12.2,21.2-29.9,21.2c-18,0-31-7.6-35.6-22.7H15l-7.5,14 c12.5,35,46.1,55.1,93.1,55.1c48.2,0,86.4-25.9,86.4-71.3C187.1,230.1,166.2,209.6,128.4,200.6z'
            },
            s: {
                viewBox: '0 0 195 417',
                path: 'M94.5,153.4c19.1,0,29.2,9.4,33.8,21.6h53.2l2.5-4.6c-7.8-35.9-38-63.1-89.8-63.1c-49,0-85,28.4-85,71.6 c0,37.4,24.5,54.4,56.9,61.6l42.5,9c14,3.2,20.9,7.9,20.9,18.4c0,13.7-12.2,21.2-29.9,21.2c-18,0-31-7.6-35.6-22.7H3.8 c7.7,42.3,41.9,67.7,92.4,69.1l64.7-121.7c-8.8-5.8-19.7-10.2-32.5-13.3l-43.2-10.1c-11.5-2.5-18.4-7.9-18.4-17.6 C66.8,160.6,78,153.4,94.5,153.4z'
            },
            T: {
                viewBox: '0 0 209 417',
                polygon: '34.4,110.9 8,160.6 75.8,160.6 75.8,332 133.7,332 133.7,160.6 202.1,160.6 202.1,110.9'
            },
            t: {
                viewBox: '0 1 209 417',
                polygon: '7.7,110.9 7.7,160.6 75.8,160.6 75.8,332 84.6,332 133.7,239.7 133.7,160.6 175.8,160.6 202.1,111 202.1,110.9'
            },
            U: {
                viewBox: '0 0 220 417',
                path: 'M148.6,110.9v125.6c0,31.3-14.8,47.5-38.5,47.5c-24.1,0-38.9-16.2-38.9-47.5V119.7L13.6,228v13.6 c0,60.8,38.2,94,96.5,94c58.3,0,96.1-33.1,96.1-93.6v-131H148.6z'
            },
            u: {
                viewBox: '0 0 220 417',
                path: 'M109.6,284.1c-24.1,0-38.9-16.2-38.9-47.5V110.9H13.1v130.7c0,59.1,36,92,91.4,93.9l34.9-65.6 C132.8,279.3,122.5,284.1,109.6,284.1z M148.1,110.9v125.6c0,9.6-1.4,17.8-4,24.6l61.6-115.9v-34.3H148.1z'
            },
            V: {
                viewBox: '0 0 226 417',
                polygon: '164.2,110.9 114.2,253.8 68.2,122.5 32,190.7 84.6,332 141.2,332 223.6,110.9'
            },
            v: {
                viewBox: '0 0 226 417',
                polygon: '162.9,111.7 84,254.6 60.6,111.7 2.7,111.7 41.9,332.7 98.4,332.7 224.1,111.7'
            },
            W: {
                viewBox: '0 0 295 417',
                polygon: '234.5,110.9 203.9,240.9 170.1,110.9 126.2,110.9 92,240.9 64.2,124.4 24.9,198.3 59.9,332 112.8,332 147.4,202.4 181.6,332 234.5,332 292.9,110.9'
            },
            w: {
                viewBox: '0 0 295 417',
                polygon: '234.5,110.9 203.9,240.9 170.1,110.9 126.2,110.9 92,240.9 61,110.9 2,110.9 59.9,332 112.8,332 147.4,202.4 177.8,317.7 287.8,110.9'
            },
            X: {
                viewBox: '0 0 217 417',
                polygon: '142,218.9 213,110.9 150.3,110.9 109.3,173.9 74.8,119.6 46,173.6 75.8,218.9 1.3,332 64.3,332 108.2,263.9 152.1,332 216.6,332'
            },
            x: {
                viewBox: '0 0 217 417',
                polygon: '213,110.9 150.3,110.9 109.3,173.9 69.3,110.9 4.9,110.9 75.8,218.9 1.3,332 64.3,332 108.2,263.9 146.7,323.5 175.4,269.5 142,218.9'
            },
            Y: {
                viewBox: '0 0 220 417',
                polygon: '157.4,110.9 111,197.3 69.5,120.1 38.8,177.9 80.4,253.5 80.4,332 138.3,332 138.3,253.5 218.3,110.9'
            },
            y: {
                viewBox: '0 0 220 417',
                polygon: '157.4,110.9 111,197.3 64.5,110.9 1.9,110.9 80.4,253.5 80.4,332 106.7,332 138.3,272.4 138.3,253.5 218.3,110.9'
            },
            Z: {
                viewBox: '0 0 202 417',
                polygon: '87.1,281.9 188.6,153.4 188.6,110.9 106.4,110.9 80,160.6 114.8,160.6 12.2,289.1 12.2,332 189.7,332 189.7,281.9'
            },
            z: {
                viewBox: '0 0 202 417',
                polygon: '188.1,110.9 12.8,110.9 12.8,160.6 114.3,160.6 11.7,289.1 11.7,332 93.4,332 120.1,281.9 86.6,281.9 188.1,153.4'
            }
        };

        var createSVG = function() {

            var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            var defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
            var attrs = {
                'id': svgID,
                'xmlns:xlink': 'http://www.w3.org/1999/xlink',
                'xmlns': 'http://www.w3.org/2000/svg',
                'xml:space': 'preserve',
                'style': 'position: absolute',
                'width': 0,
                'height': 0
            };

            svg.appendChild(defs);

            /* Add the SVG Attrs */
            for(var attr in attrs) {
                svg.setAttribute(attr, attrs[attr]);
            }

            var ifNotViewBox = function(type) {
                if (type !== 'viewBox') {
                    return type;
                }
            };

            var createGroups = function() {

                return Object.keys(svgAttributes).map(function(val) {

                    var group = '<g id="' + val +'" viewBox="' + svgAttributes[val].viewBox + '">';

                    var pathType = Object
                        .keys(svgAttributes[val])
                        .filter(ifNotViewBox)
                        .join();

                    var vectorData = function() {

                        /* For different attr type */
                        var attrType = pathType === 'path' ? 'd' : 'points';
                        return '<' + pathType + ' ' + attrType + '="' + svgAttributes[val][pathType] + '" />';
                    };

                    group += vectorData();
                    group += '</g>';

                    return group;

                });
            };

            createGroups().forEach(function(val) {
                svg.children[0].innerHTML += val;
            });

            return svg;
        };

        /* Use a Promise for better control of aysnc methods */
        var typeCropPipe = function() {
            return new Promise(function(resolve) {
                resolve(createSVG());
            });
        };

        /* Append the SVG to the DOM */
        var appendSVG = function(svg) {

            /* If typeCropSVG is already in the document */
            if (document.querySelector('#' + svgID) === null) {

                /* Append SVG */
                document.getElementById('media-kit').appendChild(svg);
            }
            return svg;
        };

        /*
            normalizeFirstLast(): All Callback that returns first & letter capitalized, the rest is lower-case
            @param {String} all - all original match string
            @param {String} g1 - capturing group 1
            @param {String} g2 - capturing group 2
            @param {Number} matchIndex - index where match is found
        */
        var normalizeFirstLast = function(all, g1, g2, matchIndex, original) {

            var firstLetter, lastLetter;
            var lastChar = original.length - 1;

            if (matchIndex === 0) {
                firstLetter = g1.toUpperCase();
            }
            if (matchIndex === lastChar) {
                lastLetter = g2.toLowerCase();
            }
            return [firstLetter, lastLetter].join('');
        };

        var sentenceCase = function(all, g1) {
            var capitalize = ' ' + g1.toUpperCase();
            return capitalize;
        };

        /* Set up RegEx pattern to match first and last letters */
        var captureFirstLast = /\b^([a-zA-Z])|([a-zA-Z])$\b/gm;

        /* Clean out any comments */
        var removeComments = /<!--[\s\S]+?-->/gmi;

        /* Trailing white-space at the begin and end of string */
        var removeTrailingWhiteSpace = /^[^\w]+|[^\w.]*$/gm;

        /* Any double spaces into single space */
        var removeDoubleSpaces = /\s{2,}/g;

        /* For senetence case  */
        var captureEveryFirstLetter = /\s{1,}(\w{0,1})/g;

        var cleanString = function(string) {
            return string
            .toLowerCase()
            .replace(removeComments, '')
            .replace(removeTrailingWhiteSpace, '')
            .replace(removeDoubleSpaces, ' ')
            .replace(captureFirstLast, normalizeFirstLast)
            .replace(captureEveryFirstLetter, sentenceCase);
        };

        /*
            getAttributes():
            @param {Object} svgs - The returned SVG Document Node
        */
        var getAttributes = function(svgs) {

            /* Get first && last letter */
            var firstLast = words.map(function(word) {
                return cleanString(word.innerHTML).match(captureFirstLast);
            });

            /* Flatten nested arrays utils */
            var flatten = function(arr) {
                return [].concat.apply([], arr);
            };

            /* Flatten the letters array and return the group attributes */
            return flatten(firstLast).map(function(el) {

                // Check if el is not a number in order to select from the group ID
                var group = isNaN(el) ? svgs.querySelector('g#' + el) : null;
                return group !== null ? group.attributes : undefined;
            });
        };

        var makeLetterSet = function(attributes) {
            return attributes.map(function(vb) {
                for (var v in vb) {
                    if (vb[v].nodeName === 'viewBox') {
                        return {
                            letter: vb.id.value,
                            viewBox: vb[v].value
                        };
                    }
                }
            });
        };

        var createCatalog = function(letterSet) {
            return letterSet
                .map(function(attr) {
                    var log = {};
                    if (attr !== undefined) {
                        var styles = 'position: absolute; top: 0; left: 0; bottom: 0; width: 100%; height: 100%';
                        var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="' + attr.viewBox + '" style="' + styles + '">';
                        svg += '<use xlink:href="#' + attr.letter + '"></use>';
                        svg += '</svg>';
                        log[attr.letter] = svg;
                    }
                    return log;
                })
                .reduce(function(svgCatalog, letter) {
                    if (letter) {
                        for (var paths in letter) {
                            svgCatalog[paths] = letter[paths];
                        }
                        return svgCatalog;
                    }
                }, []);
        };

        /* wrapLetters() - Wrap letters with span elements */
        var wrapLetters = function(svgCatalog) {
            var title = words.map(function(word) {
                var letters = cleanString(word.innerHTML)
                    .split(' ')
                    .map(function(word) {
                        return word

                            /* Clean out the encoded ampersands */
                            .replace(/&amp;/g, '&')
                            .split('');
                    });

                var eachLetter = letters
                    .map(function(word) {
                        return word.reduce(function(all, letter) {
                            var span = document.createElement('span');
                            span.style.cssText = 'display: inline; font-family: ' + fontFamily + '; text-transform: uppercase; font-weight: normal;';
                            span.setAttribute('data-char', letter);
                            span.innerHTML = letter;
                            all.push(span);
                            return all;
                        }, []);
                    });

                var eachWord = eachLetter.map(function(spans) {
                    var div = document.createElement('div');
                    div.style.cssText = 'display: inline-block;';
                    div.style.whiteSpace = 'nowrap';
                    div.classList.add('word');
                    spans.map(function(span) {
                        return div.innerHTML += span.outerHTML;
                    });
                    return div;
                });
                return {
                    eachWord: eachWord,
                    original: word
                };
            })
            .map(function(title) {

                var htmlString = title.eachWord
                    .map(function(word) {
                        return word.outerHTML;
                    });
                [title.original].forEach(function(p) {
                    p.innerHTML = '';
                    htmlString.forEach(function(v) {
                        p.innerHTML += v + ' ';
                    });
                });
                return title.original;
            });
            /*
                Return the original element, and the
                SVG that will be appended in it's place
            */
            return {
                title: title,
                catalog: svgCatalog
            };
        };

        /* Finally add the SVG elements */
        var replaceWithSVG = function(svg) {

            /* Loop the original HTML Elements that will get replaced */
            svg.title.forEach(function(title) {

                var spans = [].slice.call(title.querySelectorAll('span'));
                var spanTargets = spans.filter(function(span, index) {

                    /* Get the first and last letters to replace */
                    return (index === 0 || index === spans.length - 1) && span;
                });

                spanTargets.forEach(function(span) {

                    /* Get the color of the text to copy over to the SVG */
                    var parent = span.parentNode;
                    var color = getComputedStyle(parent, null).getPropertyValue('color');
                    var svgElement = svg.catalog[span.innerHTML];
                    var transparentLetter = span.textContent;
                    var isNotANumber = svgElement !== undefined;

                    /* Replace the span placeholder with SVG elements */
                    span.innerHTML = isNotANumber ? (svgElement + transparentLetter) : transparentLetter;

                    /* Set the placeholder transparent */
                    span.style.cssText += isNotANumber ? 'position: relative; color: transparent; background: none;' : '';

                    /* Add attr to indentify the span */
                    span.setAttribute('data-char-svg', true);

                    /* Apply the copied color to the SVG element */
                    [].slice.call(span.children).map(function(val) {
                        val.style.fill = color;
                    });
                });

                /* Add a tight line-height suitable for display text */
                title.style.cssText += 'line-height: 0.85;';
            });

            return svg.title;
        };

        var typeCropCss = function() {

            /* Kerning between the letters */
            var kerningMap = {
                a: {
                    c: { kern: -0.035 },
                    g: { kern: -0.035 },
                    s: { kern: -0.010 },
                    t: { kern: -0.065 },
                    y: { kern: -0.080 },
                    u: { kern: -0.025 },
                    v: { kern: -0.075 },
                    w: { kern: -0.045 }
                },
                b: {
                    a: { kern: -0.015 }
                },
                c: {
                    a: { kern: -0.025 },
                    y: { kern: -0.035 }
                },
                d: {
                    a: { kern: -0.035 },
                    o: { kern:  0.005 },
                    v: { kern: -0.035 },
                    y: { kern: -0.050 }
                },
                f: {
                    a: { kern: -0.045 }
                },
                g: {
                    a: { kern: -0.025 },
                    g: { kern:  0.005 },
                    o: { kern:  0.005 },
                    ',': { kern:  -0.015 }
                },
                i: {
                    o: { kern: -0.001 }
                },
                j: {
                    a: { kern: -0.020 }
                },
                k: {
                    o: { kern: -0.035 },
                    s: { kern: -0.035 }
                },
                l: {
                    y: { kern: -0.085 }
                },
                p: {
                    a: { kern: -0.060 },
                    t: { kern: -0.010 }
                },
                r: {
                    t: { kern: -0.005 },
                    v: { kern: -0.015 },
                    y: { kern: -0.025 }
                },
                s: {
                    a: { kern: -0.015 },
                    t: { kern: -0.010 }
                },
                t: {
                    a: { kern: -0.065 },
                    o: { kern: -0.025 },
                    w: { kern:  0.010 },
                    y: { kern:  0.010 }
                },
                o: {
                    t: { kern: -0.015 },
                    v: { kern: -0.035 },
                    w: { kern: -0.020 },
                    x: { kern: -0.035 },
                    y: { kern: -0.050 }
                },
                v: {
                    a: { kern: -0.075 },
                    o: { kern: -0.035 }
                },
                w: {
                    a: { kern: -0.045 },
                    o: { kern: -0.025 }
                },
                y: {
                    '-': { kern: -0.075 },
                    '—': { kern: -0.075 },
                    '–': { kern: -0.075 },
                    a: { kern: -0.080 },
                    o: { kern: -0.050 },
                    s: { kern: -0.035 },
                    t: { kern:  0.010 }
                },
                '9': {
                    '.': { kern: -0.025 }
                },
                '’': {
                    a: { kern: -0.085 }
                },
                '-': {
                    t: { kern: -0.075 }
                },
                '–': {
                    t: { kern: -0.075 }
                },
                '—': {
                    t: { kern: -0.075 }
                }
            };

            var kernRules = function(KM, i, parent) {
                return Object.keys(parent).map(function(letter) {
                    var selector = Object.keys(KM)[i];

                    /* Kerning with margins */
                    var value = '{ margin-left: ' + parent[letter].kern + 'em }';

                    /* Data attr selector */
                    var data = function(s) {

                        return '[data-char="' + s + '"]';
                    };

                    return data(selector.toUpperCase()) + '+' + data(letter) + value + data(selector) + '+' + data(letter) + value;
                });
            };

            var kernList = Object.keys(kerningMap)
                .map(function(parent, i) {
                    return kernRules(kerningMap, i, kerningMap[parent]);
                })
                .reduce(function(a, b) {
                    return a.concat(b);
                });

            var loadWebFont = function() {
                if (!fontFamily) {
                    var fontFace = '';
                    fontFace += '@font-face {';
                    fontFace += 'font-family: ' + fontFamily + ';';
                    fontFace += 'src: url("' + fontFilePath + 'CalibreWeb-Bold.eot");';
                    fontFace += 'src:';
                    fontFace += 'url("' + fontFilePath + 'CalibreWeb-Bold.eot?#iefix") format("embedded-opentype"),';
                    fontFace += 'url("' + fontFilePath + 'CalibreWeb-Bold.woff") format("woff");';
                    fontFace += '}';
                    return fontFace;
                }
                else {
                    return '';
                }
            };

            var createStyleSheet = function(styles) {
                var style = document.createElement('style');
                style.setAttribute('id', 'typecrop-css');
                style.innerHTML += styles.join().replace(/\,/g, '');

                /*
                    loadWebFont();
                    Add webfont CSS, if it's not loaded
                    via webfont, then the alignment will break
                    with desktop version of Calibre
                */
                style.innerHTML += loadWebFont();

                return style;
            };

            var styleElement = createStyleSheet(kernList);

            document.head.appendChild(styleElement);
        };

        var typeCropErr = function(err) {
            throw new Error('Opps! Something wrong with typeCrop(): ' + err);
        };

        if (!document.getElementById('typecrop-css')) {
            typeCropCss();
        }

        /* Make request and get the SVG files */
        return typeCropPipe()
            .then(appendSVG)
            .then(getAttributes)
            .then(makeLetterSet)
            .then(createCatalog)
            .then(wrapLetters)
            .then(replaceWithSVG)
            .catch(typeCropErr);
    };
});