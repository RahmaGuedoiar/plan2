
// Example sampling plan table
const samplingPlanTable = {
    A: { "0.010": { sampleSize: 1250 , accept: 0, reject: 1 }, "0.015": { sampleSize: 800, accept: 0, reject: 1 }, "0.025": { sampleSize: 500, accept: 0, reject: 1 },"0.040": { sampleSize: 315, accept: 0, reject: 1 },"0.065": { sampleSize: 200, accept: 0, reject: 1 },"0.10": { sampleSize: 125, accept: 0, reject: 1 },"0.15": { sampleSize: 80, accept: 0, reject: 1 },"0.25": { sampleSize: 50, accept: 0, reject: 1 }}, "0.40": { sampleSize: 32, accept: 0, reject: 1 }, "0.65": { sampleSize: 20, accept: 0, reject: 1 }, "1.0": { sampleSize: 13, accept: 0, reject: 1 }, "1.5": { sampleSize: 8, accept: 0, reject: 1 }, "2.5": { sampleSize: 5, accept: 0, reject: 1 },  "4.0": { sampleSize: 3, accept: 0, reject: 1 },"6.5": { sampleSize: 2, accept: 0, reject: 1 },"10": { sampleSize: 5, accept: 1, reject: 2 },"15": { sampleSize: 3, accept: 1, reject: 2 },"25": { sampleSize: 2, accept: 1, reject: 2 },"40": { sampleSize: 2, accept: 2, reject: 3 },"65": { sampleSize: 2, accept: 3, reject: 4},"100": { sampleSize: 2, accept: 5, reject: 6 },"150": { sampleSize: 2, accept: 7, reject: 8 },"250": { sampleSize: 2, accept: 10, reject: 11 },"400": { sampleSize: 2, accept: 14, reject: 15 },"650": { sampleSize: 2, accept: 21, reject: 22},"1000": { sampleSize: 2, accept: 30, reject:31 },
            B: { "0.010": { sampleSize: 1250 , accept: 0, reject: 1 }, "0.015": { sampleSize: 800, accept: 0, reject: 1 }, "0.025": { sampleSize: 500, accept: 0, reject: 1 },"0.040": { sampleSize: 315, accept: 0, reject: 1 },"0.065": { sampleSize: 200, accept: 0, reject: 1 },"0.10": { sampleSize: 125, accept: 0, reject: 1 },"0.15": { sampleSize: 80, accept: 0, reject: 1 },"0.25": { sampleSize: 50, accept: 0, reject: 1 }}, "0.40": { sampleSize: 32, accept: 0, reject: 1 }, "0.65": { sampleSize: 20, accept: 0, reject: 1 }, "1.0": { sampleSize: 13, accept: 0, reject: 1 }, "1.5": { sampleSize: 8, accept: 0, reject: 1 }, "2.5": { sampleSize: 5, accept: 0, reject: 1 },  "4.0": { sampleSize: 3, accept: 0, reject: 1 },"6.5": { sampleSize: 2, accept: 0, reject: 1 },"10": { sampleSize: 5, accept: 1, reject: 2 },"15": { sampleSize: 3, accept: 1, reject: 2 },"25": { sampleSize: 3, accept: 2, reject: 3 },"40": { sampleSize: 3, accept: 3, reject: 4},"65": { sampleSize: 3, accept: 5, reject: 6},"100": { sampleSize: 3, accept: 7, reject: 8 },"150": { sampleSize: 3, accept: 10, reject: 11},"250": { sampleSize: 3, accept: 14, reject: 15 },"400": { sampleSize: 3, accept: 21, reject: 22 },"650": { sampleSize: 3, accept: 30, reject: 31},"1000": { sampleSize: 3, accept: 44, reject:45 },
            C: { "0.010": { sampleSize: 1250 , accept: 0, reject: 1 }, "0.015": { sampleSize: 800, accept: 0, reject: 1 }, "0.025": { sampleSize: 500, accept: 0, reject: 1 },"0.040": { sampleSize: 315, accept: 0, reject: 1 },"0.065": { sampleSize: 200, accept: 0, reject: 1 },"0.10": { sampleSize: 125, accept: 0, reject: 1 },"0.15": { sampleSize: 80, accept: 0, reject: 1 },"0.25": { sampleSize: 50, accept: 0, reject: 1 }}, "0.40": { sampleSize: 32, accept: 0, reject: 1 }, "0.65": { sampleSize: 20, accept: 0, reject: 1 }, "1.0": { sampleSize: 13, accept: 0, reject: 1 }, "1.5": { sampleSize: 8, accept: 0, reject: 1 }, "2.5": { sampleSize: 5, accept: 0, reject: 1 },  "4.0": { sampleSize: 3, accept: 0, reject: 1 },"6.5": { sampleSize: 8, accept: 1, reject: 2 },"10": { sampleSize: 5, accept: 1, reject: 2 },"15": { sampleSize: 5, accept: 2, reject: 3 },"25": { sampleSize: 5, accept: 3, reject: 4 },"40": { sampleSize: 5, accept: 5, reject: 6},"65": { sampleSize: 5, accept: 7, reject: 8},"100": { sampleSize: 5, accept: 10, reject: 11 },"150": { sampleSize: 5, accept: 14, reject: 15},"250": { sampleSize: 5, accept: 21, reject: 22 },"400": { sampleSize: 5, accept: 30, reject: 31 },"650": { sampleSize: 5, accept: 44, reject: 45},"1000": { sampleSize: 3, accept: 44, reject:45 },
            D: { "0.010": { sampleSize: 1250 , accept: 0, reject: 1 }, "0.015": { sampleSize: 800, accept: 0, reject: 1 }, "0.025": { sampleSize: 500, accept: 0, reject: 1 },"0.040": { sampleSize: 315, accept: 0, reject: 1 },"0.065": { sampleSize: 200, accept: 0, reject: 1 },"0.10": { sampleSize: 125, accept: 0, reject: 1 },"0.15": { sampleSize: 80, accept: 0, reject: 1 },"0.25": { sampleSize: 50, accept: 0, reject: 1 }}, "0.40": { sampleSize: 32, accept: 0, reject: 1 }, "0.65": { sampleSize: 20, accept: 0, reject: 1 }, "1.0": { sampleSize: 13, accept: 0, reject: 1 }, "1.5": { sampleSize: 8, accept: 0, reject: 1 }, "2.5": { sampleSize: 5, accept: 0, reject: 1 },  "4.0": { sampleSize: 13, accept: 1, reject: 2 },"6.5": { sampleSize: 8, accept: 1, reject: 2 },"10": { sampleSize: 8, accept: 2, reject: 3},"15": { sampleSize: 8, accept: 3, reject: 4 },"25": { sampleSize: 8, accept: 5, reject: 6 },"40": { sampleSize: 8, accept: 7, reject: 8},"65": { sampleSize: 8, accept: 10, reject: 11},"100": { sampleSize: 8, accept: 14, reject: 15 },"150": { sampleSize: 8, accept: 21, reject: 22},"250": { sampleSize: 8, accept: 30, reject: 31 },"400": { sampleSize: 8, accept: 44, reject: 45 },"650": { sampleSize: 5, accept: 44, reject: 45},"1000": { sampleSize: 3, accept: 44, reject:45 },
            E: { "0.010": { sampleSize: 1250 , accept: 0, reject: 1 }, "0.015": { sampleSize: 800, accept: 0, reject: 1 }, "0.025": { sampleSize: 500, accept: 0, reject: 1 },"0.040": { sampleSize: 315, accept: 0, reject: 1 },"0.065": { sampleSize: 200, accept: 0, reject: 1 },"0.10": { sampleSize: 125, accept: 0, reject: 1 },"0.15": { sampleSize: 80, accept: 0, reject: 1 },"0.25": { sampleSize: 50, accept: 0, reject: 1 }}, "0.40": { sampleSize: 32, accept: 0, reject: 1 }, "0.65": { sampleSize: 20, accept: 0, reject: 1 }, "1.0": { sampleSize: 13, accept: 0, reject: 1 }, "1.5": { sampleSize: 8, accept: 0, reject: 1 }, "2.5": { sampleSize: 20, accept: 1, reject: 2 },  "4.0": { sampleSize: 13, accept: 1, reject: 2 },"6.5": { sampleSize: 13, accept: 2, reject: 3 },"10": { sampleSize: 13, accept: 3, reject: 4},"15": { sampleSize: 13, accept: 5, reject: 6 },"25": { sampleSize: 13, accept: 7, reject: 8 },"40": { sampleSize: 13, accept: 10, reject: 11},"65": { sampleSize: 13, accept: 14, reject: 15},"100": { sampleSize: 13, accept:21, reject: 22 },"150": { sampleSize: 13, accept: 30, reject: 31},"250": { sampleSize: 13, accept: 44, reject: 45 },"400": { sampleSize: 8, accept: 44, reject: 45 },"650": { sampleSize: 5, accept: 44, reject: 45},"1000": { sampleSize: 3, accept: 44, reject:45 },
            F: { "0.010": { sampleSize: 1250 , accept: 0, reject: 1 }, "0.015": { sampleSize: 800, accept: 0, reject: 1 }, "0.025": { sampleSize: 500, accept: 0, reject: 1 },"0.040": { sampleSize: 315, accept: 0, reject: 1 },"0.065": { sampleSize: 200, accept: 0, reject: 1 },"0.10": { sampleSize: 125, accept: 0, reject: 1 },"0.15": { sampleSize: 80, accept: 0, reject: 1 },"0.25": { sampleSize: 50, accept: 0, reject: 1 }}, "0.40": { sampleSize: 32, accept: 0, reject: 1 }, "0.65": { sampleSize: 20, accept: 0, reject: 1 }, "1.0": { sampleSize: 13, accept: 0, reject: 1 }, "1.5": { sampleSize: 32, accept: 1, reject: 2 }, "2.5": { sampleSize: 32, accept: 2, reject: 3},  "4.0": { sampleSize: 20, accept: 2, reject: 3},"6.5": { sampleSize: 20, accept: 3, reject: 4 },"10": { sampleSize: 20, accept: 5, reject: 6},"15": { sampleSize: 20, accept: 7, reject: 8},"25": { sampleSize: 20, accept: 10, reject: 11 },"40": { sampleSize: 20, accept: 14, reject: 15},"65": { sampleSize: 20, accept: 21, reject: 22},"100": { sampleSize: 13, accept:21, reject: 22 },"150": { sampleSize: 13, accept: 30, reject: 31},"250": { sampleSize: 13, accept: 44, reject: 45 },"400": { sampleSize: 8, accept: 44, reject: 45 },"650": { sampleSize: 5, accept: 44, reject: 45},"1000": { sampleSize: 3, accept: 44, reject:45 },
            G: { "0.010": { sampleSize: 1250 , accept: 0, reject: 1 }, "0.015": { sampleSize: 800, accept: 0, reject: 1 }, "0.025": { sampleSize: 500, accept: 0, reject: 1 },"0.040": { sampleSize: 315, accept: 0, reject: 1 },"0.065": { sampleSize: 200, accept: 0, reject: 1 },"0.10": { sampleSize: 125, accept: 0, reject: 1 },"0.15": { sampleSize: 80, accept: 0, reject: 1 },"0.25": { sampleSize: 50, accept: 0, reject: 1 }}, "0.40": { sampleSize: 32, accept: 0, reject: 1 }, "0.65": { sampleSize: 20, accept: 0, reject: 1 }, "1.0": { sampleSize: 50, accept: 1, reject: 2 }, "1.5": { sampleSize: 32, accept: 1, reject: 2}, "2.5": { sampleSize: 32, accept: 2, reject: 3},  "4.0": { sampleSize: 32, accept: 3, reject: 4 },"6.5": { sampleSize: 32, accept: 5, reject: 6},"10": { sampleSize: 32, accept: 7, reject: 8},"15": { sampleSize: 32, accept: 10, reject: 11},"25": { sampleSize: 32, accept: 14, reject: 15 },"40": { sampleSize: 32, accept: 21, reject: 22},"65": { sampleSize: 20, accept: 21, reject: 22},"100": { sampleSize: 13, accept:21, reject: 22 },"150": { sampleSize: 13, accept: 30, reject: 31},"250": { sampleSize: 13, accept: 44, reject: 45 },"400": { sampleSize: 8, accept: 44, reject: 45 },"650": { sampleSize: 5, accept: 44, reject: 45},"1000": { sampleSize: 3, accept: 44, reject:45 },
            H: { "0.010": { sampleSize: 1250 , accept: 0, reject: 1 }, "0.015": { sampleSize: 800, accept: 0, reject: 1 }, "0.025": { sampleSize: 500, accept: 0, reject: 1 },"0.040": { sampleSize: 315, accept: 0, reject: 1 },"0.065": { sampleSize: 200, accept: 0, reject: 1 },"0.10": { sampleSize: 125, accept: 0, reject: 1 },"0.15": { sampleSize: 80, accept: 0, reject: 1 },"0.25": { sampleSize: 50, accept: 0, reject: 1 }}, "0.40": { sampleSize: 32, accept: 0, reject: 1 }, "0.65": { sampleSize: 80, accept: 1, reject: 2 }, "1.0": { sampleSize: 50, accept: 1, reject: 2 }, "1.5": { sampleSize: 50, accept: 2, reject: 3 }, "2.5": { sampleSize: 50, accept: 3, reject: 4},  "4.0": { sampleSize: 50, accept: 5, reject: 6 },"6.5": { sampleSize: 50, accept: 7, reject: 8},"10": { sampleSize: 50, accept: 10, reject: 11},"15": { sampleSize: 50, accept: 14, reject: 15},"25": { sampleSize: 50, accept: 21, reject: 22 },"40": { sampleSize: 32, accept: 21, reject: 22},"65": { sampleSize: 20, accept: 21, reject: 22},"100": { sampleSize: 13, accept:21, reject: 22 },"150": { sampleSize: 13, accept: 30, reject: 31},"250": { sampleSize: 13, accept: 44, reject: 45 },"400": { sampleSize: 8, accept: 44, reject: 45 },"650": { sampleSize: 5, accept: 44, reject: 45},"1000": { sampleSize: 3, accept: 44, reject:45 },
            J: { "0.010": { sampleSize: 1250 , accept: 0, reject: 1 }, "0.015": { sampleSize: 800, accept: 0, reject: 1 }, "0.025": { sampleSize: 500, accept: 0, reject: 1 },"0.040": { sampleSize: 315, accept: 0, reject: 1 },"0.065": { sampleSize: 200, accept: 0, reject: 1 },"0.10": { sampleSize: 125, accept: 0, reject: 1 },"0.15": { sampleSize: 80, accept: 0, reject: 1 },"0.25": { sampleSize: 50, accept: 0, reject: 1 }}, "0.40": { sampleSize: 125, accept: 1, reject: 2 }, "0.65": { sampleSize: 80, accept: 1, reject: 2 }, "1.0": { sampleSize: 80, accept: 2, reject: 3 }, "1.5": { sampleSize: 80, accept: 3, reject: 4 }, "2.5": { sampleSize: 80, accept: 5, reject: 6},  "4.0": { sampleSize: 80, accept: 7, reject: 8 },"6.5": { sampleSize: 80, accept: 10, reject: 11},"10": { sampleSize: 80, accept: 14, reject: 15},"15": { sampleSize: 80, accept: 21, reject: 22},"25": { sampleSize: 50, accept: 21, reject: 22 },"40": { sampleSize: 32, accept: 21, reject: 22},"65": { sampleSize: 20, accept: 21, reject: 22},"100": { sampleSize: 13, accept:21, reject: 22 },"150": { sampleSize: 13, accept: 30, reject: 31},"250": { sampleSize: 13, accept: 44, reject: 45 },"400": { sampleSize: 8, accept: 44, reject: 45 },"650": { sampleSize: 5, accept: 44, reject: 45},"1000": { sampleSize: 3, accept: 44, reject:45 },
            K: { "0.010": { sampleSize: 1250 , accept: 0, reject: 1 }, "0.015": { sampleSize: 800, accept: 0, reject: 1 }, "0.025": { sampleSize: 500, accept: 0, reject: 1 },"0.040": { sampleSize: 315, accept: 0, reject: 1 },"0.065": { sampleSize: 200, accept: 0, reject: 1 },"0.10": { sampleSize: 125, accept: 0, reject: 1 },"0.15": { sampleSize: 80, accept: 0, reject: 1 },"0.25": { sampleSize: 200, accept: 1, reject: 2 }}, "0.40": { sampleSize: 125, accept: 1, reject: 2 }, "0.65": { sampleSize: 125, accept: 2, reject: 3 }, "1.0": { sampleSize: 125, accept: 3, reject: 4 }, "1.5": { sampleSize: 125, accept: 5, reject: 6 }, "2.5": { sampleSize: 125, accept: 7, reject: 8},  "4.0": { sampleSize: 125, accept: 10, reject: 11},"6.5": { sampleSize: 125, accept: 14, reject: 15},"10": { sampleSize: 125, accept: 21, reject: 22},"15": { sampleSize: 80, accept: 21, reject: 22},"25": { sampleSize: 50, accept: 21, reject: 22 },"40": { sampleSize: 32, accept: 21, reject: 22},"65": { sampleSize: 20, accept: 21, reject: 22},"100": { sampleSize: 13, accept:21, reject: 22 },"150": { sampleSize: 13, accept: 30, reject: 31},"250": { sampleSize: 13, accept: 44, reject: 45 },"400": { sampleSize: 8, accept: 44, reject: 45 },"650": { sampleSize: 5, accept: 44, reject: 45},"1000": { sampleSize: 3, accept: 44, reject:45 },
            L: { "0.010": { sampleSize: 1250 , accept: 0, reject: 1 }, "0.015": { sampleSize: 800, accept: 0, reject: 1 }, "0.025": { sampleSize: 500, accept: 0, reject: 1 },"0.040": { sampleSize: 315, accept: 0, reject: 1 },"0.065": { sampleSize: 200, accept: 0, reject: 1 },"0.10": { sampleSize: 125, accept: 0, reject: 1 },"0.15": { sampleSize: 315, accept: 1, reject: 2 },"0.25": { sampleSize: 200, accept: 1, reject: 2 }}, "0.40": { sampleSize: 200, accept: 2, reject: 3 }, "0.65": { sampleSize: 200, accept: 3, reject: 4 }, "1.0": { sampleSize: 200, accept: 5, reject: 6 }, "1.5": { sampleSize: 200, accept: 7, reject: 8 }, "2.5": { sampleSize: 200, accept: 10, reject: 11},  "4.0": { sampleSize: 200, accept: 14, reject: 15},"6.5": { sampleSize: 200, accept: 21, reject: 21},"10": { sampleSize: 125, accept: 21, reject: 22},"15": { sampleSize: 80, accept: 21, reject: 22},"25": { sampleSize: 50, accept: 21, reject: 22 },"40": { sampleSize: 32, accept: 21, reject: 22},"65": { sampleSize: 20, accept: 21, reject: 22},"100": { sampleSize: 13, accept:21, reject: 22 },"150": { sampleSize: 13, accept: 30, reject: 31},"250": { sampleSize: 13, accept: 44, reject: 45 },"400": { sampleSize: 8, accept: 44, reject: 45 },"650": { sampleSize: 5, accept: 44, reject: 45},"1000": { sampleSize: 3, accept: 44, reject:45 },
            M: { "0.010": { sampleSize: 1250 , accept: 0, reject: 1 }, "0.015": { sampleSize: 800, accept: 0, reject: 1 }, "0.025": { sampleSize: 500, accept: 0, reject: 1 },"0.040": { sampleSize: 315, accept: 0, reject: 1 },"0.065": { sampleSize: 200, accept: 0, reject: 1 },"0.10": { sampleSize: 500, accept: 1, reject: 2 },"0.15": { sampleSize: 315, accept: 1, reject: 2 },"0.25": { sampleSize: 315, accept: 2, reject: 3 }}, "0.40": { sampleSize: 315, accept: 3, reject: 4 }, "0.65": { sampleSize: 315, accept: 5, reject: 6 }, "1.0": { sampleSize: 315, accept: 7, reject: 8 }, "1.5": { sampleSize: 315, accept: 10, reject: 11 }, "2.5": { sampleSize: 315, accept: 14, reject: 15},  "4.0": { sampleSize: 315, accept: 21, reject: 22},"6.5": { sampleSize: 200, accept: 21, reject: 21},"10": { sampleSize: 125, accept: 21, reject: 22},"15": { sampleSize: 80, accept: 21, reject: 22},"25": { sampleSize: 50, accept: 21, reject: 22 },"40": { sampleSize: 32, accept: 21, reject: 22},"65": { sampleSize: 20, accept: 21, reject: 22},"100": { sampleSize: 13, accept:21, reject: 22 },"150": { sampleSize: 13, accept: 30, reject: 31},"250": { sampleSize: 13, accept: 44, reject: 45 },"400": { sampleSize: 8, accept: 44, reject: 45 },"650": { sampleSize: 5, accept: 44, reject: 45},"1000": { sampleSize: 3, accept: 44, reject:45 },
            N: { "0.010": { sampleSize: 1250 , accept: 0, reject: 1 }, "0.015": { sampleSize: 800, accept: 0, reject: 1 }, "0.025": { sampleSize: 500, accept: 0, reject: 1 },"0.040": { sampleSize: 315, accept: 0, reject: 1 },"0.065": { sampleSize: 800, accept: 1, reject: 2 },"0.10": { sampleSize: 500, accept: 1, reject: 2 },"0.15": { sampleSize: 500, accept: 2, reject: 3 },"0.25": { sampleSize: 500, accept: 3, reject: 4 }}, "0.40": { sampleSize: 500, accept: 5, reject: 6 }, "0.65": { sampleSize: 500, accept: 7, reject: 8 }, "1.0": { sampleSize: 500, accept: 10, reject: 11 }, "1.5": { sampleSize: 500, accept: 14, reject: 15 }, "2.5": { sampleSize: 500, accept: 21, reject: 22},  "4.0": { sampleSize: 315, accept: 21, reject: 22},"6.5": { sampleSize: 200, accept: 21, reject: 21},"10": { sampleSize: 125, accept: 21, reject: 22},"15": { sampleSize: 80, accept: 21, reject: 22},"25": { sampleSize: 50, accept: 21, reject: 22 },"40": { sampleSize: 32, accept: 21, reject: 22},"65": { sampleSize: 20, accept: 21, reject: 22},"100": { sampleSize: 13, accept:21, reject: 22 },"150": { sampleSize: 13, accept: 30, reject: 31},"250": { sampleSize: 13, accept: 44, reject: 45 },"400": { sampleSize: 8, accept: 44, reject: 45 },"650": { sampleSize: 5, accept: 44, reject: 45},"1000": { sampleSize: 3, accept: 44, reject:45 },
            P: { "0.010": { sampleSize: 1250 , accept: 0, reject: 1 }, "0.015": { sampleSize: 800, accept: 0, reject: 1 }, "0.025": { sampleSize: 500, accept: 0, reject: 1 },"0.040": { sampleSize: 1250, accept: 1, reject: 2 },"0.065": { sampleSize: 800, accept: 1, reject: 2 },"0.10": { sampleSize: 800, accept: 2, reject: 3 },"0.15": { sampleSize: 800, accept: 3, reject: 4 },"0.25": { sampleSize: 800, accept: 5, reject: 6 }}, "0.40": { sampleSize: 800, accept: 7, reject: 8 }, "0.65": { sampleSize: 800, accept: 10, reject: 11 }, "1.0": { sampleSize: 800, accept: 14, reject: 15 }, "1.5": { sampleSize: 800, accept: 21, reject: 22 }, "2.5": { sampleSize: 500, accept: 21, reject: 22},  "4.0": { sampleSize: 315, accept: 21, reject: 22},"6.5": { sampleSize: 200, accept: 21, reject: 21},"10": { sampleSize: 125, accept: 21, reject: 22},"15": { sampleSize: 80, accept: 21, reject: 22},"25": { sampleSize: 50, accept: 21, reject: 22 },"40": { sampleSize: 32, accept: 21, reject: 22},"65": { sampleSize: 20, accept: 21, reject: 22},"100": { sampleSize: 13, accept:21, reject: 22 },"150": { sampleSize: 13, accept: 30, reject: 31},"250": { sampleSize: 13, accept: 44, reject: 45 },"400": { sampleSize: 8, accept: 44, reject: 45 },"650": { sampleSize: 5, accept: 44, reject: 45},"1000": { sampleSize: 3, accept: 44, reject:45 },
            Q: { "0.010": { sampleSize: 1250 , accept: 0, reject: 1 }, "0.015": { sampleSize: 800, accept: 0, reject: 1 }, "0.025": { sampleSize: 2000, accept: 1, reject: 2 },"0.040": { sampleSize: 1250, accept: 1, reject: 2 },"0.065": { sampleSize: 1250, accept: 2, reject: 3 },"0.10": { sampleSize: 1250, accept: 3, reject: 4 },"0.15": { sampleSize: 1250, accept: 5, reject: 6 },"0.25": { sampleSize: 1250, accept: 7, reject: 8 }}, "0.40": { sampleSize: 1250, accept: 10, reject: 11 }, "0.65": { sampleSize: 1250, accept: 14, reject: 15 }, "1.0": { sampleSize: 1250, accept: 21, reject: 22 }, "1.5": { sampleSize: 800, accept: 21, reject: 22 }, "2.5": { sampleSize: 500, accept: 21, reject: 22},  "4.0": { sampleSize: 315, accept: 21, reject: 22},"6.5": { sampleSize: 200, accept: 21, reject: 21},"10": { sampleSize: 125, accept: 21, reject: 22},"15": { sampleSize: 80, accept: 21, reject: 22},"25": { sampleSize: 50, accept: 21, reject: 22 },"40": { sampleSize: 32, accept: 21, reject: 22},"65": { sampleSize: 20, accept: 21, reject: 22},"100": { sampleSize: 13, accept:21, reject: 22 },"150": { sampleSize: 13, accept: 30, reject: 31},"250": { sampleSize: 13, accept: 44, reject: 45 },"400": { sampleSize: 8, accept: 44, reject: 45 },"650": { sampleSize: 5, accept: 44, reject: 45},"1000": { sampleSize: 3, accept: 44, reject:45 },
            R: { "0.010": { sampleSize: 1250 , accept: 0, reject: 1 }, "0.015": { sampleSize: 800, accept: 0, reject: 1 }, "0.025": { sampleSize: 2000, accept: 1, reject: 2 },"0.040": { sampleSize: 2000, accept: 2, reject: 3 },"0.065": { sampleSize: 2000, accept: 3, reject: 4 },"0.10": { sampleSize: 2000, accept: 5, reject: 6 },"0.15": { sampleSize: 2000, accept: 7, reject: 8 },"0.25": { sampleSize: 2000, accept: 10, reject: 11 }}, "0.40": { sampleSize: 2000, accept: 14, reject: 15 }, "0.65": { sampleSize: 2000, accept: 21, reject: 22 }, "1.0": { sampleSize: 1250, accept: 21, reject: 22 }, "1.5": { sampleSize: 800, accept: 21, reject: 22 }, "2.5": { sampleSize: 500, accept: 21, reject: 22},  "4.0": { sampleSize: 315, accept: 21, reject: 22},"6.5": { sampleSize: 200, accept: 21, reject: 21},"10": { sampleSize: 125, accept: 21, reject: 22},"15": { sampleSize: 80, accept: 21, reject: 22},"25": { sampleSize: 50, accept: 21, reject: 22 },"40": { sampleSize: 32, accept: 21, reject: 22},"65": { sampleSize: 20, accept: 21, reject: 22},"100": { sampleSize: 13, accept:21, reject: 22 },"150": { sampleSize: 13, accept: 30, reject: 31},"250": { sampleSize: 13, accept: 44, reject: 45 },"400": { sampleSize: 8, accept: 44, reject: 45 },"650": { sampleSize: 5, accept: 44, reject: 45},"1000": { sampleSize: 3, accept: 44, reject:45 },
};

document.getElementById('sampling-form').addEventListener('submit', function (e) {
    e.preventDefault();
    console.log("Bouton cliqué, gestionnaire déclenché !");
    const lotSize = parseInt(document.getElementById('lot-size').value);
    const aql = document.getElementById('aql').value;
    const inspectionLevel = document.getElementById('inspection-level').value;
    let inf = Infinity;
    const letterCodeTable = [
        { range: [2, 8], S1: "A", S2: "A", S3: "A", S4: "A", I: "A", II: "A", III: "B" },
        { range: [9, 15], S1: "A", S2: "A", S3: "A", S4: "A", I: "A", II: "B", III: "C" },
        { range: [16, 25], S1: "A", S2: "A", S3: "B", S4: "B", I: "B", II: "C", III: "D" },
        { range: [26, 50], S1: "A", S2: "B", S3: "B", S4: "C", I: "C", II: "D", III: "E" },
        { range: [51, 90], S1: "B", S2: "B", S3: "C", S4: "C", I: "C", II: "E", III: "F" },
        { range: [91, 150], S1: "B", S2: "B", S3: "C", S4: "D", I: "D", II: "F", III: "G" },
        { range: [151, 280], S1: "B", S2: "C", S3: "D", S4: "E", I: "E", II: "G", III: "H" },
        { range: [281, 500], S1: "B", S2: "C", S3: "D", S4: "E", I: "F", II: "H", III: "J" },
        { range: [501, 1200], S1: "C", S2: "C", S3: "E", S4: "F", I: "G", II: "J", III: "K" },
        { range: [1201, 3200], S1: "C", S2: "D", S3: "E", S4: "G", I: "H", II: "K", III: "L" },
        { range: [3201, 10000], S1: "C", S2: "D", S3: "F", S4: "G", I: "J", II: "L", III: "M" },
        { range: [10001, 35000], S1: "C", S2: "D", S3: "F", S4: "H", I: "K", II: "M", III: "N" },
        { range: [35001, 150000], S1: "D", S2: "E", S3: "G", S4: "J", I: "L", II: "N", III: "P" },
        { range: [150001, 500000], S1: "D", S2: "E", S3: "G", S4: "J", I: "M", II: "P", III: "Q" },
        { range: [500000, inf], S1: "D", S2: "E", S3: "H", S4: "K", I: "N", II: "Q", III: "R" },
    ];

    let letterCode = null;
    for (const row of letterCodeTable) {
        if (lotSize >= row.range[0] && lotSize <= row.range[1]) {
            letterCode = row[inspectionLevel];
            break;
        }
    }

    if (!letterCode) {
        document.getElementById('sampling-result').innerHTML = 
            `Aucun code lettre trouvé pour la taille de lot ${lotSize}.`;
        document.getElementById('result').style.display = 'block';
        return;
    }
    const plan = samplingPlanTable[letterCode][aql];
    if (!plan) {
        document.getElementById('sampling-result').innerHTML = 
            `Aucun plan d'échantillonnage trouvé pour le code lettre ${letterCode} et le AQL ${aql}.`;
        document.getElementById('result').style.display = 'block';
        return;
    }
    
    document.getElementById('sampling-result').innerHTML =
        `For a lot size of ${lotSize}, AQL ${aql}, and inspection level ${inspectionLevel}:<br>` +
        `Letter Code: <strong>${letterCode}</strong><br>` +
        `Sample Size: <strong>${plan.sampleSize}</strong><br>` +
        `Accept ≤ <strong>${plan.accept}</strong>, Reject ≥ <strong>${plan.reject}</strong>`;
    document.getElementById('result').style.display = 'block';
});
