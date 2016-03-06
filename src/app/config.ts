import {Injectable} from 'angular2/core';

@Injectable()
export class Config {
    public static BASE_FOLDER:string = 'cfApiKey';
    public static SESSION_STORAGE_API_KEY:string = 'cfApiKey';
    public static SESSION_STORAGE_SPACE_ID:string = 'cfSpaceId';
    public static SPACE_ID:string = 'rue07lqzt1co';
    public static API_KEY:string = 'ece0f8fa62ac82fd11f4ceb8876a6afa7a28ef0dad813f890d391406caf1cd0e';
    public static PRODUCT_CONTENT_TYPE_ID:string = '2PqfXUJwE8qSYKuM0U6w8M';
    public static CATEGORY_CONTENT_TYPE_ID:string = '6XwpTaSiiI2Ak2Ww0oi6qa';
    public static URL_BASE_PATH:string = '/product-catalogue-web.ts/';
    // public static URL_BASE_PATH:string = '/';
    public static URL_SETTINGS_DEEPLINK:string = '#/settings?';
}