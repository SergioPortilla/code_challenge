export interface Sprites {
    other: SpriteOfficial;
}

export interface SpriteOfficial {
    'official-artwork': SpriteOficialImage;
}

export interface SpriteOficialImage {
    front_default: string;
    front_shiny: string;
}
