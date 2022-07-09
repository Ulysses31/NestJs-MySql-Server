import { BaseRepository } from './base-repository';
import { Inject, Injectable } from '@nestjs/common';
import {
	DeleteResult,
	InsertResult,
	Repository,
	UpdateResult
} from 'typeorm';
import { IBaseService } from './base.service.interface';
import { InjectRepository } from '@nestjs/typeorm';

const headers = {
	ContentType: 'json'
};

@Injectable()
export class BaseService<TModel> implements IBaseService<TModel> {
	constructor(
		@InjectRepository(BaseRepository)
		public readonly bsRepo: Repository<TModel>
	) {}

	findAll(): Promise<TModel[]> {
		return this.bsRepo.find();
		// return this.httpService.get<TModel[]>(this._apiUrl).pipe(
		// 	tap((res) => console.log(res)),
		// 	catchError((err) => {
		// 		console.log(err);
		// 		return of(err.response);
		// 	}),
		// 	map((res) => {
		// 		var axiosResp: AxiosResponse<TModel[]> = {
		// 			status: res.status,
		// 			statusText: res.statusText,
		// 			headers: res.headers,
		// 			config: res.config,
		// 			// request: res.request,
		// 			data: res.data
		// 		};
		// 		Logger.log(
		// 			`Status: ${res.status} - StatusText: ${res.statusText}`
		// 		);
		// 		return axiosResp;
		// 	})
		// );
	}

	findOne(id: any): Promise<TModel> {
		return this.bsRepo.findOne(id);
		// 	// return this.httpService.get<TModel>(`${this._apiUrl}/${id}`).pipe(
		// 	// 	tap((res) => console.log(res)),
		// 	// 	catchError((err) => {
		// 	// 		console.log(err);
		// 	// 		return of(err.response);
		// 	// 	}),
		// 	// 	map((res) => {
		// 	// 		var axiosResp: AxiosResponse<TModel> = {
		// 	// 			status: res.status,
		// 	// 			statusText: res.statusText,
		// 	// 			headers: res.headers,
		// 	// 			config: res.config,
		// 	// 			// request: res.request,
		// 	// 			data: res.data
		// 	// 		};
		// 	// 		Logger.log(
		// 	// 			`Status: ${res.status} - StatusText: ${res.statusText}`
		// 	// 		);
		// 	// 		return axiosResp;
		// 	// 	})
		// 	// );
	}

	create(dto: TModel): Promise<InsertResult> {
		return this.bsRepo.insert(dto);
		//return this.httpService
		//	.post<TModel>(`${this._apiUrl}`, dto, { headers })
		//	.pipe(
		//		tap((res) => console.log(res)),
		//		catchError((err) => {
		//			console.log(err);
		//			return of(err.response);
		//		}),
		//		map((res) => {
		//			var axiosResp: AxiosResponse<TModel> = {
		//				status: res.status,
		//				statusText: res.statusText,
		//				headers: res.headers,
		//				config: res.config,
		//				// request: res.request,
		//				data: res.data
		//			};
		//			Logger.log(
		//				`Status: ${res.status} - StatusText: ${res.statusText}`
		//			);
		//			return axiosResp;
		//		})
		//	);
	}

	update(id: number, dto: TModel): Promise<UpdateResult> {
		return this.bsRepo.update(id, dto);
		// return this.httpService
		// 	.put<TModel>(`${this._apiUrl}/${id}`, dto, { headers })
		// 	.pipe(
		// 		tap((res) => console.log(res)),
		// 		catchError((err) => {
		// 			console.log(err);
		// 			return of(err.response);
		// 		}),
		// 		map((res) => {
		// 			var axiosResp: AxiosResponse<TModel> = {
		// 				status: res.status,
		// 				statusText: res.statusText,
		// 				headers: res.headers,
		// 				config: res.config,
		// 				// request: res.request,
		// 				data: res.data
		// 			};
		// 			Logger.log(
		// 				`Status: ${res.status} - StatusText: ${res.statusText}`
		// 			);
		// 			return axiosResp;
		// 		})
		// 	);
	}

	remove(id: number): Promise<DeleteResult> {
		return this.bsRepo.delete(id);
		// return this.httpService
		// 	.delete<TModel>(`${this._apiUrl}/${id}`)
		// 	.pipe(
		// 		tap((res) => console.log(res)),
		// 		catchError((err) => {
		// 			console.log(err);
		// 			return of(err.response);
		// 		}),
		// 		map((res) => {
		// 			var axiosResp: AxiosResponse<TModel> = {
		// 				status: res.status,
		// 				statusText: res.statusText,
		// 				headers: res.headers,
		// 				config: res.config,
		// 				// request: res.request,
		// 				data: res.data
		// 			};
		// 			Logger.log(
		// 				`Status: ${res.status} - StatusText: ${res.statusText}`
		// 			);
		// 			return axiosResp;
		// 		})
		// 	);
	}
}
