import gzip
import csv
import json
import pandas as pd


df = pd.read_csv('google-us-data.csv.gz', compression='gzip', header=0,    sep=' ', quotechar='"', error_bad_lines=False)
for i in df:
    print(i)