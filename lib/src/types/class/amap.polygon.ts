import { Map } from './amap.map';
import { PolygonOptions } from '../interface';
import { LngLat } from './amap.lng-lat';
import { Bounds } from './amap.bounds';

export interface CPolygon {
  new (opts: PolygonOptions): Polygon;
}

export type PolygonPath = Array<LngLat>|Array<Array<LngLat>>|Array<number[]>|Array<Array<number[]>>;

export declare class Polygon {
  constructor(opts: PolygonOptions);
  setPath(path: PolygonPath): void;
  getPath(): number[][];
  setOptions(opt: PolygonOptions): void;
  getOptions(): PolygonOptions;
  getBounds(): Bounds;
  getArea(): number;
  hide(): void;
  show(): void;
  setMap(map: Map): void;
  setExtData(ext: any): void;
  getExtData(): any;
  contains(point: LngLat): boolean;
}
