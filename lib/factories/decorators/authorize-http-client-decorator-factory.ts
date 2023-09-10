import { HttpClient } from '@/data/protocols/http';
import { AuthorizeHttpClientDecorator } from '@/infra/decorators';
import { makeLocalStorageAdapter } from '@/factories/cache';
import { makeAxiosHttpClient } from '@/factories/http';

export const makeAuthorizeHttpClientDecorator = (): HttpClient => new AuthorizeHttpClientDecorator(makeLocalStorageAdapter(), makeAxiosHttpClient());
