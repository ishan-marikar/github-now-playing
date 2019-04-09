import { EventEmitter } from 'events';
import { resolve } from 'path';
import { NowPlayingTrack } from '../../nowPlayingTrack';
import { execFileAsync } from '../../utils';
import { SourceProvider } from '../sourceProvider';

export class SpotifySourceProvider extends SourceProvider {
  private static scriptPath = resolve(__dirname, 'get-current-track.jxa');

  protected async check() {
    const result = await execFileAsync(SpotifySourceProvider.scriptPath);
    return JSON.parse(result) as NowPlayingTrack | null;
  }
}
