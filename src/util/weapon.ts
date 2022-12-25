export const numToString = (weaponId: number): string => {
  switch(weaponId) {
    case -2: return "Random_Gold"
    case -1: return "Random_Green"
    case 0: return "Shooter_Short"
    case 10: return "Shooter_First"
    case 20: return "Shooter_Precision"
    case 30: return "Shooter_Blaze"
    case 40: return "Shooter_Normal"
    case 50: return "Shooter_Gravity"
    case 60: return "Shooter_QuickMiddle"
    case 70: return "Shooter_Expert"
    case 80: return "Shooter_Heavy"
    case 90: return "Shooter_Long"
    case 100: return "Shooter_QuickLong"
    case 200: return "Blaster_Short"
    case 210: return "Blaster_Middle"
    case 220: return "Blaster_Long"
    case 230: return "Blaster_LightShort"
    case 240: return "Blaster_Light"
    case 250: return "Blaster_LightLong"
    case 300: return "Shooter_TripleQuick"
    case 310: return "Shooter_TripleMiddle"
    case 400: return "Shooter_Flash"
    case 1000: return "Roller_Compact"
    case 1010: return "Roller_Normal"
    case 1020: return "Roller_Heavy"
    case 1030: return "Roller_Hunter"
    case 1040: return "Roller_Wide"
    case 1100: return "Brush_Mini"
    case 1110: return "Brush_Normal"
    case 2000: return "Charger_Quick"
    case 2010: return "Charger_Normal"
    case 2030: return "Charger_Long"
    case 2050: return "Charger_Light"
    case 2060: return "Charger_Keeper"
    case 2070: return "Charger_Pencil"
    case 3000: return "Slosher_Strong"
    case 3010: return "Slosher_Diffusion"
    case 3020: return "Slosher_Launcher"
    case 3030: return "Slosher_Bathtub"
    case 3040: return "Slosher_Washtub"
    case 4000: return "Spinner_Quick"
    case 4010: return "Spinner_Standard"
    case 4020: return "Spinner_Hyper"
    case 4030: return "Spinner_Downpour"
    case 4040: return "Spinner_Serein"
    case 5000: return "Maneuver_Short"
    case 5010: return "Maneuver_Normal"
    case 5020: return "Maneuver_Gallon"
    case 5030: return "Maneuver_Dual"
    case 5040: return "Maneuver_Stepper"
    case 6000: return "Shelter_Normal"
    case 6010: return "Shelter_Wide"
    case 6020: return "Shelter_Compact"
    case 7010: return "Stringer_Normal"
    case 7020: return "Stringer_Short"
    case 8000: return "Saber_Normal"
    case 8010: return "Saber_Lite"
    case 20900: return "Blaster_Bear_Coop"
    case 22900: return "Charger_Bear_Coop"
    case 23900: return "Slosher_Bear_Coop"
    case 26900: return "Shelter_Bear_Coop"
    case 27900: return "Stringer_Bear_Coop"
    case 28900: return "Saber_Bear_Coop"
    default: return "Unknown"
  }
}
