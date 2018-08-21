import argparse
import os

from pydub import AudioSegment

def file_name(hour: int, template: str, leading_zeros: bool) -> str:
    """
    Generate the file name
    """
    # Parse the to a string.
    hour_formatted = str(hour)

    # Format the hour.
    if leading_zeros:

        # Prefix the hour with a zero.
        hour_formatted = hour_formatted.zfill(2)

    # Return the formatted filename.
    return template.format(hour=hour_formatted)

def create_directory(directory: str) -> None:
    """
    Create the export directory
    """
    # Check if the directory doesn't exists.
    if not os.path.exists(directory):

        # Create the directory.
        os.makedirs(directory)

def main() -> None:
    """
    The main code that will generate the chimes.
    """

    # Give the parser a description.
    parser = argparse.ArgumentParser("generate audio files for a pendulum clock")

    # Add the file argument.
    parser.add_argument("--file",
                        help="the audio file to use",
                        type=str,
                        default="chime.mp3")
    
    # Add the file type argument.
    parser.add_argument("--type",
                        help="set the file type to use",
                        type=str,
                        default="mp3")

    # Add the directory argument.
    parser.add_argument("--directory",
                        help="the directory where to store the audio files",
                        type=str,
                        default="chimes")

    # Add leading zero argument.
    parser.add_argument("--leading-zeros",
                        help="prefix hour 1 to 9 with a zero (01, 02, 03 ...)",
                        action="store_true",
                        default=False)

    # Add 24 hour format option.
    parser.add_argument("--twentyfour-hours",
                        help="generate files for the hours 13 to 24",
                        action="store_true",
                        default=False)

    # The file name template.
    parser.add_argument("--template",
                        help="make your own file name template, {hour} will be converted to a number.",
                        type=str,
                        default="chimes_at_{hour}_o_clock.mp3")

    # Parse the arguments.
    args = parser.parse_args()

    # Create the directory.
    create_directory(args.directory)

    # Audio Segment
    sound = AudioSegment.from_file(args.file, args.type)

    # Set the sound as combined
    combined = sound

    # Export it as the 1 'o clock sound.
    combined.export(os.path.join(args.directory, file_name(1, args.template, args.leading_zeros)), format=args.type)

    # Determine the count to use in the for loop.
    count = 25 if args.twentyfour_hours else 13

    # Loop through each hour.
    for i in range(2, count):

        # Combine the sounds.
        combined += sound

        # Export it with the right name.
        combined.export(os.path.join(args.directory, file_name(i, args.template, args.leading_zeros)), format=args.type)

# Check if this script get executed.
if __name__ == '__main__':

    # Run the main function.
    main()
