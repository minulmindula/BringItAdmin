﻿/* tslint:disable */
/* eslint-disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v12.2.3.0 (NJsonSchema v9.13.35.0 (Newtonsoft.Json v11.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Observable, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { Injectable, Inject, Optional, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

export interface IOrderService {
    /**
     * @param input (optional) 
     * @return Success
     */
    addOrder(input: OderInputDto | null | undefined): Observable<void>;
    /**
     * @param id (optional) 
     * @return Success
     */
    getAddedOrders(id: number | null | undefined): Observable<OrderOutputDto[]>;
    /**
     * @param lat (optional) 
     * @param lng (optional) 
     * @return Success
     */
    getPendingOrders(lat: number | null | undefined, lng: number | null | undefined): Observable<OrderOutputDto[]>;
    /**
     * @param input (optional) 
     * @return Success
     */
    confirmOrder(input: OrderUpdateDto | null | undefined): Observable<void>;
    /**
     * @param input (optional) 
     * @return Success
     */
    confirmDriver(input: OrderUpdateDto | null | undefined): Observable<void>;
}

@Injectable()
export class OrderService implements IOrderService {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "http://localhost:7000";
    }

    /**
     * @param input (optional) 
     * @return Success
     */
    addOrder(input: OderInputDto | null | undefined): Observable<void> {
        let url_ = this.baseUrl + "/orders/AddOrder";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(input);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json", 
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processAddOrder(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processAddOrder(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>_observableThrow(e);
                }
            } else
                return <Observable<void>><any>_observableThrow(response_);
        }));
    }

    protected processAddOrder(response: HttpResponseBase): Observable<void> {
        const status = response.status;
        const responseBlob = 
            response instanceof HttpResponse ? response.body : 
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return _observableOf<void>(<any>null);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<void>(<any>null);
    }

    /**
     * @param id (optional) 
     * @return Success
     */
    getAddedOrders(id: number | null | undefined): Observable<OrderOutputDto[]> {
        let url_ = this.baseUrl + "/orders/GetAddedOrders?";
        if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetAddedOrders(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetAddedOrders(<any>response_);
                } catch (e) {
                    return <Observable<OrderOutputDto[]>><any>_observableThrow(e);
                }
            } else
                return <Observable<OrderOutputDto[]>><any>_observableThrow(response_);
        }));
    }

    protected processGetAddedOrders(response: HttpResponseBase): Observable<OrderOutputDto[]> {
        const status = response.status;
        const responseBlob = 
            response instanceof HttpResponse ? response.body : 
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (resultData200 && resultData200.constructor === Array) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(OrderOutputDto.fromJS(item));
            }
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<OrderOutputDto[]>(<any>null);
    }

    /**
     * @param lat (optional) 
     * @param lng (optional) 
     * @return Success
     */
    getPendingOrders(lat: number | null | undefined, lng: number | null | undefined): Observable<OrderOutputDto[]> {
        let url_ = this.baseUrl + "/orders/GetPendingOrders?";
        if (lat !== undefined)
            url_ += "lat=" + encodeURIComponent("" + lat) + "&"; 
        if (lng !== undefined)
            url_ += "lng=" + encodeURIComponent("" + lng) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetPendingOrders(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetPendingOrders(<any>response_);
                } catch (e) {
                    return <Observable<OrderOutputDto[]>><any>_observableThrow(e);
                }
            } else
                return <Observable<OrderOutputDto[]>><any>_observableThrow(response_);
        }));
    }

    protected processGetPendingOrders(response: HttpResponseBase): Observable<OrderOutputDto[]> {
        const status = response.status;
        const responseBlob = 
            response instanceof HttpResponse ? response.body : 
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (resultData200 && resultData200.constructor === Array) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(OrderOutputDto.fromJS(item));
            }
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<OrderOutputDto[]>(<any>null);
    }

    /**
     * @param input (optional) 
     * @return Success
     */
    confirmOrder(input: OrderUpdateDto | null | undefined): Observable<void> {
        let url_ = this.baseUrl + "/orders/ConfirmOrder";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(input);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json", 
            })
        };

        return this.http.request("put", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processConfirmOrder(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processConfirmOrder(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>_observableThrow(e);
                }
            } else
                return <Observable<void>><any>_observableThrow(response_);
        }));
    }

    protected processConfirmOrder(response: HttpResponseBase): Observable<void> {
        const status = response.status;
        const responseBlob = 
            response instanceof HttpResponse ? response.body : 
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return _observableOf<void>(<any>null);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<void>(<any>null);
    }

    /**
     * @param input (optional) 
     * @return Success
     */
    confirmDriver(input: OrderUpdateDto | null | undefined): Observable<void> {
        let url_ = this.baseUrl + "/orders/ConfirmDriver";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(input);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json", 
            })
        };

        return this.http.request("put", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processConfirmDriver(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processConfirmDriver(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>_observableThrow(e);
                }
            } else
                return <Observable<void>><any>_observableThrow(response_);
        }));
    }

    protected processConfirmDriver(response: HttpResponseBase): Observable<void> {
        const status = response.status;
        const responseBlob = 
            response instanceof HttpResponse ? response.body : 
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return _observableOf<void>(<any>null);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<void>(<any>null);
    }
}

export class OderInputDto implements IOderInputDto {
    restaurantId?: number | undefined;
    customerId?: number | undefined;
    driverId?: number | undefined;
    state?: OderInputDtoState | undefined;
    latitude?: number | undefined;
    longitude?: number | undefined;
    itemList?: Item[] | undefined;

    constructor(data?: IOderInputDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.restaurantId = data["restaurantId"];
            this.customerId = data["customerId"];
            this.driverId = data["driverId"];
            this.state = data["state"];
            this.latitude = data["latitude"];
            this.longitude = data["longitude"];
            if (data["itemList"] && data["itemList"].constructor === Array) {
                this.itemList = [] as any;
                for (let item of data["itemList"])
                    this.itemList!.push(Item.fromJS(item));
            }
        }
    }

    static fromJS(data: any): OderInputDto {
        data = typeof data === 'object' ? data : {};
        let result = new OderInputDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["restaurantId"] = this.restaurantId;
        data["customerId"] = this.customerId;
        data["driverId"] = this.driverId;
        data["state"] = this.state;
        data["latitude"] = this.latitude;
        data["longitude"] = this.longitude;
        if (this.itemList && this.itemList.constructor === Array) {
            data["itemList"] = [];
            for (let item of this.itemList)
                data["itemList"].push(item.toJSON());
        }
        return data; 
    }
}

export interface IOderInputDto {
    restaurantId?: number | undefined;
    customerId?: number | undefined;
    driverId?: number | undefined;
    state?: OderInputDtoState | undefined;
    latitude?: number | undefined;
    longitude?: number | undefined;
    itemList?: Item[] | undefined;
}

export class Item implements IItem {
    type?: string | undefined;
    displayName?: string | undefined;
    price?: string | undefined;

    constructor(data?: IItem) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.type = data["type"];
            this.displayName = data["displayName"];
            this.price = data["price"];
        }
    }

    static fromJS(data: any): Item {
        data = typeof data === 'object' ? data : {};
        let result = new Item();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["type"] = this.type;
        data["displayName"] = this.displayName;
        data["price"] = this.price;
        return data; 
    }
}

export interface IItem {
    type?: string | undefined;
    displayName?: string | undefined;
    price?: string | undefined;
}

export class OrderOutputDto implements IOrderOutputDto {
    id?: string | undefined;
    restaurantId?: number | undefined;
    customerId?: number | undefined;
    driverId?: number | undefined;
    state?: OrderOutputDtoState | undefined;
    latitude?: number | undefined;
    longitude?: number | undefined;
    itemList?: Item[] | undefined;

    constructor(data?: IOrderOutputDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.id = data["id"];
            this.restaurantId = data["restaurantId"];
            this.customerId = data["customerId"];
            this.driverId = data["driverId"];
            this.state = data["state"];
            this.latitude = data["latitude"];
            this.longitude = data["longitude"];
            if (data["itemList"] && data["itemList"].constructor === Array) {
                this.itemList = [] as any;
                for (let item of data["itemList"])
                    this.itemList!.push(Item.fromJS(item));
            }
        }
    }

    static fromJS(data: any): OrderOutputDto {
        data = typeof data === 'object' ? data : {};
        let result = new OrderOutputDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["restaurantId"] = this.restaurantId;
        data["customerId"] = this.customerId;
        data["driverId"] = this.driverId;
        data["state"] = this.state;
        data["latitude"] = this.latitude;
        data["longitude"] = this.longitude;
        if (this.itemList && this.itemList.constructor === Array) {
            data["itemList"] = [];
            for (let item of this.itemList)
                data["itemList"].push(item.toJSON());
        }
        return data; 
    }
}

export interface IOrderOutputDto {
    id?: string | undefined;
    restaurantId?: number | undefined;
    customerId?: number | undefined;
    driverId?: number | undefined;
    state?: OrderOutputDtoState | undefined;
    latitude?: number | undefined;
    longitude?: number | undefined;
    itemList?: Item[] | undefined;
}

export class OrderUpdateDto implements IOrderUpdateDto {
    id?: string | undefined;
    driverId?: number | undefined;

    constructor(data?: IOrderUpdateDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.id = data["id"];
            this.driverId = data["driverId"];
        }
    }

    static fromJS(data: any): OrderUpdateDto {
        data = typeof data === 'object' ? data : {};
        let result = new OrderUpdateDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["driverId"] = this.driverId;
        return data; 
    }
}

export interface IOrderUpdateDto {
    id?: string | undefined;
    driverId?: number | undefined;
}

export enum OderInputDtoState {
    _0 = 0, 
    _10 = 10, 
    _20 = 20, 
    _30 = 30, 
}

export enum OrderOutputDtoState {
    _0 = 0, 
    _10 = 10, 
    _20 = 20, 
    _30 = 30, 
}

export class SwaggerException extends Error {
    message: string;
    status: number; 
    response: string; 
    headers: { [key: string]: any; };
    result: any; 

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isSwaggerException = true;

    static isSwaggerException(obj: any): obj is SwaggerException {
        return obj.isSwaggerException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): Observable<any> {
    if(result !== null && result !== undefined)
        return _observableThrow(result);
    else
        return _observableThrow(new SwaggerException(message, status, response, headers, null));
}

function blobToText(blob: any): Observable<string> {
    return new Observable<string>((observer: any) => {
        if (!blob) {
            observer.next("");
            observer.complete();
        } else {
            let reader = new FileReader(); 
            reader.onload = event => { 
                observer.next((<any>event.target).result);
                observer.complete();
            };
            reader.readAsText(blob); 
        }
    });
}